import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { ButtonContainer } from './Button';

export default class Home extends Component {
    render() {
        return (
            <div className="position-relative overflow-hidden p-3 p-md-5 text-center">
            <div className="col-md-5 p-lg-5 mx-auto my-5">
              <h1 className="display-5 font-weight-bold text-uppercase mb-5">Golden Shoe</h1>
              <div className="row">
                  <div className="col">
              <Link to="/products">
                  <ButtonContainer className="text-uppercase font-weight-bold">shop men</ButtonContainer>
              </Link>

                  </div>
                  <div className="col">

              <ButtonContainer className="text-uppercase font-weight-bold">shop women</ButtonContainer>
                  </div>

              </div>
            </div>
          </div>
        )
    }
}
