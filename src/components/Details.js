import React, { Component } from 'react'
import { ProductConsumer } from '../context';
import { Link } from 'react-router-dom';
import { ButtonContainer } from './Button';
import Viewer from "./Viewer";

export default class Details extends Component {
    render() {
        return (
            <ProductConsumer>
                {(value) => {
                    const {id, brand, title, img, images, price, colour, info, inCart, inStock} = value.detailProduct;
                    return (
                        <div className="container py-5">
                            <div className="row">
                                    <div className="col-12 mx-auto col-lg-6 my-3">
                                        <div className="canvas-container">
                                            <Viewer images={images} />
                                        </div>
                                    </div>
                                    <div className="col-12 mx-auto col-lg-6 my-3 text-lg-left text-center">
                                        <h3 className="font-weight-bold text-uppercase">{brand}</h3>
                                        <h4>{title}</h4>
                                        <p>£{price.toFixed(2)}</p>
                                        <br/>
                                        <p><strong>Colour:</strong> <span className="text-capitalize">{colour}</span></p>
                                        <br/>
                                        <div>
                                            <ButtonContainer disabled={ !inStock ? true : inCart ? true : false }>
                                                {!inStock ? "Out of Stock" : inCart ? "In Bag" : "Add to Bag"}
                                            </ButtonContainer>
                                        </div>
                                    </div>
                            </div>
                            <div>
                                <br/>
                                <p className="text-center">{info}</p>
                            </div>
                        </div>
                    )
                }}
            </ProductConsumer>
        )
    }
}
