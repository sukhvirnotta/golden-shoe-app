import React, { Component } from 'react'
import { ProductConsumer } from '../context';
import { ButtonContainer } from './Button';
import { Link } from 'react-router-dom';

export default class Details extends Component {
    render() {
        return (
            <ProductConsumer>
                {(value) => {
                    const {id, brand, title, img, price, colour, info, inCart, inStock} = value.detailProduct;
                    return (
                        <div className="container py-5">
                            <Link to ="/products">
                                <i className="fas fa-long-arrow-alt-left text-dark align-middle"></i>
                                <span className="fas text-uppercase text-dark back-to-results">&nbsp;&nbsp;back to results</span>
                            </Link>
                            <div className="row">
                                    <div className="col-12 mx-auto col-lg-6 my-3">
                                        <img src={img} className="img-fluid" alt="trainer" />
                                    </div>
                                    <div className="col-12 mx-auto col-lg-6 my-3 text-lg-left text-center">
                                        <h3 className="font-weight-bold text-uppercase">{brand}</h3>
                                        <h4>{title}</h4>
                                        <p>£{price.toFixed(2)}</p>
                                        <br/>
                                        <p><strong>Colour:</strong> <span className="text-capitalize">{colour}</span></p>
                                        <br/>
                                        <div>
                                            <ButtonContainer disabled={ !inStock ? true : inCart ? true : false } onClick={()=>{
                                                value.addToCart(id);
                                                value.openModal(id);
                                            }}>
                                                {!inStock ? "Out of Stock" : inCart ? "In Bag" : "Add to Bag"}
                                            </ButtonContainer>
                                        </div>
                                        <div className="my-3">
                                            <ButtonContainer back>
                                                <i className="fas fa-map-marker-alt"></i>&nbsp;&nbsp;Check Store
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
