import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export default class Default extends Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-10 mx-auto text-center pt-5">
                        <h4 className="mb-5"><strong>Sorry, we can't find that page</strong></h4>
                        <p className="mb-5">Error code: 404</p>
                        <Link to="/">
                            <p className="btn btn-link text-dark text-uppercase font-weight-bold p-0">store</p>
                        </Link>
                        <br/>
                        <Link to="/products">
                            <p className="btn btn-link text-dark text-uppercase font-weight-bold p-0">men</p>
                        </Link>
                        <br/>
                        <p className="btn btn-link text-dark text-uppercase font-weight-bold p-0">women</p>
                    </div>
                </div>
            </div>
        )
    }
}
