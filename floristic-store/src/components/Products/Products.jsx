import React from "react";
import './Products.scss';
import roseForeverYoungRed100 from '../../assets/images/products/roses/foreverYoung_red_100cm_600x900.jpg';

const Products = (props) => {

    return (
        <div className="products">
            {props.products.map (p => <div>
                <div className="product-card">
                    <h3>{p.title} {p.type}</h3>
                    <img src={roseForeverYoungRed100} alt="Rose Forever Young Red"/>
                    <div>{p.price} {p.currency}</div>
                </div>
            </div>)}
        </div>
    )
};

export default Products;