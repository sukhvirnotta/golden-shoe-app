import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { ProductCosumer } from '../context';
import { ButtonContainer } from './Button';
import PropTypes from 'prop-types';

export default class Product extends Component {
    render() {
        const {id, title, img, price, brand, inCart, inStock} = this.props.product;
        return (
            <div className="mx-auto mx-md-0 col-9 col-md-6 col-lg-4 my-3">
                <div className="card bg-transparent border-0">
                    <div className="img-container" onClick={() => console.log("image clicked")}>
                        <Link to="/details">
                            <img src={img} alt="trainer" className="card-img-top bg-transparent"/>
                        </Link>
                    </div>
                    <div>
                        <ButtonContainer disabled={!inStock ? true: inCart ? true : false} onClick={() => {console.log("added to cart");
                        }}>
                            {!inStock ? (<span disabled>Out of Stock</span>) : inCart ? (<span disabled>In Bag</span>) : (<span>Add to Bag</span>)}
                        </ButtonContainer>
                    </div>
                    <div className="card-footer bg-transparent p-0 pt-3">
                        <p className="mb-0 font-weight-bold text-uppercase">
                            {brand}
                        </p>
                        <p className="mb-2">
                            {title}
                        </p>
                        <p className="mb-0">
                            £{price.toFixed(2)}
                        </p>
                    </div>
                </div>
            </div>
        )
    }
}

Product.propTypes = {
    product:PropTypes.shape({
        id:PropTypes.number,
        img:PropTypes.string,
        images:PropTypes.string,
        title:PropTypes.string,
        price:PropTypes.number,
        inCart:PropTypes.bool,
        inStock:PropTypes.bool
    }).isRequired
}