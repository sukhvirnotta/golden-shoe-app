import React, { Component } from 'react';
import styled from 'styled-components';
import { ProductConsumer } from '../context';
import { ButtonContainer } from './Button';
import { Link } from 'react-router-dom';

export default class Modal extends Component {
    render() {
        return (
            <ProductConsumer>
                {(value) => {
                    const { modalOpen, closeModal} = value;
                    const { img, title, price} = value.modalProduct;

                    if(!modalOpen) {
                        return null;
                    }
                    else {
                        return (<ModalContainer>
                            <div className="container">
                                <div className="row">
                                    <div id="modal" className="col-8 mx-auto col-md-6 col-lg-6 text-center p-5">
                                        <h5>Item was added to your bag</h5>
                                        {/* <img src={img} className="img-fluid" alt="item" /> */}
                                        <h5>{title}</h5>
                                        <h5 className="text-muted">£{price.toFixed(2)}</h5>
                                        <div className="row">
                                            <div className="col">
                                                <Link to='/products'>
                                                    <ButtonContainer back onClick = {() => closeModal()}>
                                                        Continue Shopping
                                                    </ButtonContainer>
                                                </Link>
                                            </div>
                                            <div className="col">
                                                <Link to='/cart'>
                                                    <ButtonContainer onClick = {() => closeModal()}>
                                                        Checkout
                                                    </ButtonContainer>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </ModalContainer>
                        );
                    } 
                }}
            </ProductConsumer>
        )
    }
}

const ModalContainer = styled.div`
    position:fixed;
    top:0;
    left:0;
    right:0;
    bottom:0;
    background: rgba(0,0,0,0.3);
    display:flex;
    align-items:center;
    justify-content:center;
    #modal{
        background: var(--mainGrey);
    }
`;