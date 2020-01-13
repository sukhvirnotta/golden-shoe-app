import React from 'react'

export default function CartColumns() {
    return (
        <div className="container-fluid text-center d-none d-lg-block">
            <div className="row">
                <div className="col-10 mx-auto col-lg-2">
                    <p className="font-weight-bold">Shopping bag</p>
                </div>
                <div className="col-10 mx-auto col-lg-2">
                </div>
                <div className="col-10 mx-auto col-lg-2">
                </div>
                <div className="col-10 mx-auto col-lg-2">
                    <p className="text-capitalize">quantity</p>
                </div>
                <div className="col-10 mx-auto col-lg-2">
                    <p className="text-capitalize">remove</p>
                </div>
            </div>
            <hr className="col-11" />
        </div>
    )
}
