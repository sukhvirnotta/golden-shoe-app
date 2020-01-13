import React from 'react';
import { ButtonContainer } from '../Button';
import Title from '../Title';

export default function CartTotals({value}) {
    const{cart, cartTotal} = value;
    return (
        <React.Fragment>
            <div className="container col-10 order-summary-container p-5">
                <div className="row">
                    <div className="col-10 mx-auto">
                        <Title title="order summary"/>
                        <hr />
                        <p>
                            {(() => {
                            if (cart.length === 1) {
                            return (
                                <span>My bag ({cart.length} item)</span>
                            )
                            } else {
                            return (
                                <span>My bag ({cart.length} items)</span>
                            )}})()}
                            <span className="float-right">£{cartTotal.toFixed(2)}</span>
                        </p>
                        <p className="btn btn-link text-dark p-0">Add your promotion code</p>
                        <p>
                            <strong>Total <span className="float-right">£{cartTotal.toFixed(2)}</span></strong>
                        </p>
                        <ButtonContainer>
                            Checkout now
                        </ButtonContainer>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}
