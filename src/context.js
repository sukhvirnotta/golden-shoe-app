import React, { Component } from 'react';
import axios from 'axios';
import { detailProduct } from './data';

const ProductContext = React.createContext();

class ProductProvider extends Component {
    
    state = {
        products: [],
        detailProduct: detailProduct,
        cart: [],
        modalOpen: false,
        cartTotal:0
    };
    
    componentDidMount(){
        this.setProducts();
    }

    setProducts = () => {
        let tempProducts = [];
        axios.get('http://localhost:5000/products/')
            .then(response => {
                response.data.forEach(item => {
                    const singleItem = {...item};
                    tempProducts = [...tempProducts, singleItem];
                })
                this.setState(() => {
                    return {products:tempProducts}
                });
            })
            .catch((error) => {
                console.log(error);
            })
    };

    getItem = (id) => {
        const product = this.state.products.find(item => item.id === id);
        return product;
    }

    handleDetail = id => {
        const product = this.getItem(id);
        this.setState(() => {
          return { detailProduct: product };
        });
    };

    addToCart = id => {
        let tempProducts = [...this.state.products];
        const index = tempProducts.indexOf(this.getItem(id));
        const product = tempProducts[index];
        product.inCart = true;
        product.count = 1;
        const price = product.price;
        product.total = price;

        this.setState(() => {
            return {products:tempProducts, cart:[...this.state.cart,product]};
        }, () => {
            this.addTotals();
        });
    };

    openModal = () => {
        this.setState(() => {
            return {modalOpen:true};
        })
    }

    closeModal = () => {
        this.setState(() => {
            return {modalOpen:false};
        })
    }

    increment = (id) => {
        let tempCart = [...this.state.cart];
        const selectedProduct = tempCart.find(item => item.id === id);

        const index = tempCart.indexOf(selectedProduct);
        const product = tempCart[index];

        product.count++;
        product.total = product.count * product.price;

        this.setState(() => {
            return{cart:[...tempCart]}
        }, () => {
            this.addTotals();
        })
    }

    decrement = (id) => {
        let tempCart = [...this.state.cart];
        const selectedProduct = tempCart.find(item => item.id === id);

        const index = tempCart.indexOf(selectedProduct);
        const product = tempCart[index];

        product.count--;
        if(product.count === 0) {
            this.removeItem(id);
        }
        else {
            product.total = product.count * product.price;
            this.setState(() => {
                return{cart:[...tempCart]}
            }, () => {
                this.addTotals();
            })
        }
    }

    removeItem = (id) => {
        let tempProducts = [...this.state.products];
        let tempCart = [...this.state.cart];

        tempCart = tempCart.filter(item => item.id !== id);

        const index = tempProducts.indexOf(this.getItem(id));
        let removedProduct = tempProducts[index];
        removedProduct.inCart = false;
        removedProduct.count = 0;
        removedProduct.total = 0;

        this.setState(() => {
            return {
                cart:[...tempCart],
                products:[...tempProducts]
            }
        }, () => {
            this.addTotals();
        })
    }

    addTotals = () => {
        let total = 0;
        this.state.cart.map(item => (total += item.total));
        this.setState(() => {
            return {
                cartTotal:total
            }
        })
    }

    render() {
        return (
            <ProductContext.Provider value={{
                ...this.state,
                handleDetail:this.handleDetail,
                addToCart:this.addToCart,
                openModal:this.openModal,
                closeModal:this.closeModal,
                increment:this.increment,
                decrement:this.decrement,
                removeItem:this.removeItem
            }}>
                {this.props.children}
            </ProductContext.Provider>
        )
    }
}

const ProductConsumer = ProductContext.Consumer;

export { ProductProvider, ProductConsumer };