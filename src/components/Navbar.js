import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components';

export default class Navbar extends Component {
    render() {
        return (
            <NavWrapper className="navbar sticky-top navbar-expand-lg navbar-light px-sm-5">
                <Link to='/'>
                    <h3 className="navbar-brand font-weight-bold text-uppercase">Golden Shoe</h3>
                </Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item ml-lg-5">
                        <Link to="/products" className="nav-link">
                            Men
                        </Link>
                    </li>
                    <li className="nav-item ml-lg-5">
                        <span className="nav-link">
                            Women
                        </span>
                    </li>
                </ul>
                <Link to="/cart" className="ml-auto">
                    <i className="fas fa-shopping-bag fa-2x bag-icon"></i>
                </Link>
                </div>
            </NavWrapper>
        )
    }
}

const NavWrapper = styled.nav`
    background-color: var(--mainGrey);
    .nav-link {
        text-transform: uppercase;
    }
`