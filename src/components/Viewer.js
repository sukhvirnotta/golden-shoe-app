import React, { Component } from "react";

class Viewer extends Component {
  constructor(props) {
    super(props);
    this.canvas = React.createRef();
    this.loadedImages = [];
    this.xInitial = null;
    this.xLast = null;
    this.currentImage = 0;
    this.animation = null;
  }

  componentDidMount() {
    // Resize the canvas to fit the container it's inside
    const canvas = this.canvas.current;
    canvas.width = canvas.clientWidth;
    canvas.height = canvas.clientHeight;

    // Pre-load all product images and then add the event listeners to the canvas and draw the first product image.
    this.loadImages().then(() => {
      canvas.addEventListener("mousedown", this.handleMouseDown, false);
      canvas.addEventListener("touchstart", this.handleTouchStart, false);
      canvas.addEventListener("mousemove", this.handleMouseMove, false);
      canvas.addEventListener("touchmove", this.handleTouchMove, false);
      canvas.addEventListener("mouseup", this.handleMouseUp, false);
      canvas.addEventListener("touchend", this.handleMouseUp, false);

      this.drawImage(0);
    });
  }

  componentWillUnmount() {
    const canvas = this.canvas.current;

    // Remove all event listeners before the component gets removed from the page.
    canvas.removeEventListener("mousedown", this.handleMouseDown, false);
    canvas.removeEventListener("touchstart", this.handleTouchStart, false);
    canvas.removeEventListener("mousemove", this.handleMouseMove, false);
    canvas.removeEventListener("touchmove", this.handleTouchMove, false);
    canvas.removeEventListener("mouseup", this.handleMouseUp, false);
    canvas.removeEventListener("touchend", this.handleMouseUp, false);
  }

  loadImages() {
    const { images } = this.props;

    return new Promise(resolve => {
      images.forEach(image => {
        const img = new Image();
        img.src = image;
        img.addEventListener(
          "load",
          () => {
            // Add the loaded image to the array to be used later.
            this.loadedImages.push(img);

            // Resolve the promise, if all the images have been loaded. Otherwise, draw the loading bar to show the progress.
            if (this.loadedImages.length === images.length) {
              resolve();
            } else {
              this.drawLoadingBar(
                (this.loadedImages.length * 100) / images.length
              );
            }
          },
          false
        );
      });
    });
  }

  drawLoadingBar(progress) {
    const canvas = this.canvas.current;
    const context = canvas.getContext("2d");
    const barWidth = Math.round(window.innerWidth / 5);
    const barHeight = Math.round(barWidth / 10);
    const barPosX = (canvas.width - barWidth) / 2;
    const barPosY = (canvas.height - barHeight) / 2;

    // Draw the progress bar background.
    context.fillStyle = "#0096d6";
    context.clearRect(0, 0, canvas.width, canvas.height);
    context.fillRect(barPosX, barPosY, barWidth, barHeight);

    // Draw the progress bar fill.
    context.fillStyle = "#ffffff";
    const fillVal = Math.min(Math.max(progress / 100, 0), 1);
    context.fillRect(
      barPosX + 1,
      barPosY + 1,
      fillVal * (barWidth - 2),
      barHeight - 2
    );
  }

  drawImage(frame) {
    const canvas = this.canvas.current;
    const context = canvas.getContext("2d");

    // Clear the canvas before starting to draw
    context.clearRect(0, 0, canvas.width, canvas.height);

    // Get the image element to draw on canvas from the pre-loaded images array.
    const newImage = this.loadedImages.filter(
      img => img.src.indexOf(this.props.images[frame]) > -1
    )[0];

    // Resize the image depending on the canvas's size.
    const imageSizeScale = newImage.width / newImage.height;
    let newWidth = canvas.width;
    let newHeight = newWidth / imageSizeScale;

    if (newHeight > canvas.height) {
      newHeight = canvas.height;
      newWidth = newHeight * imageSizeScale;
    }

    // Draw the image on canvas
    context.drawImage(newImage, 0, 0, canvas.width, canvas.height);
    this.currentImage = frame;
  }

  handleMouseDown = event => {
    this.xInitial = event.pageX;
  };

  handleTouchStart = event => {
    this.xInitial = event.touches[0].pageX;
  };

  handleMouseMove = event => {
    if (this.xInitial !== null) {
      const delta = event.pageX - (!this.xLast ? this.xInitial : this.xLast);
      this.xLast = event.pageX;

      let startingFrame = this.currentImage;
      if (this.currentImage === this.loadedImages.length - 1) {
        startingFrame = 0;
      } else if (this.currentImage === 0) {
        startingFrame = this.loadedImages.length - 1;
      }

      let moveFrame = startingFrame;
      if (delta > 0) {
        moveFrame = startingFrame - 1;
      } else if (delta < 0) {
        moveFrame = startingFrame + 1;
      }

      this.newFrame = Math.min(
        Math.max(moveFrame, 0),
        this.loadedImages.length - 1
      );

      if (this.animation === null) {
        this.animation = requestAnimationFrame(this.animationFrame);
      }
    }
  };

  animationFrame = () => {
    this.drawImage(this.newFrame);

    this.animation = requestAnimationFrame(this.animationFrame);
  };

  handleTouchMove = event => this.handleMouseMove(event.touches[0]);

  handleMouseUp = () => {
    this.xInitial = null;
    this.xLast = null;
    this.animation && cancelAnimationFrame(this.animation);
    this.animation = null;
  };

  render() {
    return <canvas ref={this.canvas} />;
  }
}

export default Viewer;