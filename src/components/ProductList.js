import React, { Component } from 'react'
import Product from './Product';
import Title from './Title';
import { ProductConsumer } from '../context';

export default class ProductList extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="py-5">
                    <div className="container">
                        <Title title="mens trainers" />
                        <ProductConsumer>
                            {value => {
                                const length = value.products.length
                                return <p className="text-center">{length} results</p>
                            }}
                        </ProductConsumer>
                        <div className="row">
                            <ProductConsumer>
                                {value => {
                                    return value.products.map( product => {
                                        return <Product key={product.id} product={product}/>
                                    })
                                }}
                            </ProductConsumer>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}
