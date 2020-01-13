import React from 'react'

export default function CartItem({item, value}) {
    const{id, brand, title, colour, img, price, count} = item;
    const {increment, decrement, removeItem} = value;
    return (
        <div className="row my-2 text-center text-capitalize vertical-align-content">
            <div className="col-10 mx-auto col-lg-2">
                <img src={img} className="mb-1 img-fluid cart-img" alt="item"/>
            </div>
            <div className="col-10 mx-auto col-lg-2">
                {brand} {title} / {colour}
            </div>
            <div className="col-10 mx-auto col-lg-2 font-weight-bold">
                £{price.toFixed(2)}
            </div>
            <div className="col-10 mx-auto col-lg-2 my-2 my-lg-0">
                <div className="d-flex justify-content-center">
                    <div>
                        <span className="btn btn-cart mx-1" onClick={()=>decrement(id)}>-</span>
                        <span className="btn btn-cart mx-1">{count}</span>
                        <span className="btn btn-cart mx-1" onClick={()=>increment(id)}>+</span>
                    </div>
                </div>
            </div>
            <div className="col-10 mx-auto col-lg-2">
                <div className="cart-icon" onClick={()=>removeItem(id)}>
                    <i className="fas fa-trash"></i>
                </div>
            </div>
            <hr className="col-11"/>
        </div>
    )
}
