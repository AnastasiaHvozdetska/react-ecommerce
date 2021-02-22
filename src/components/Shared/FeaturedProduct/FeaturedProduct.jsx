import React, { useCallback, memo } from 'react';
import { withRouter } from 'react-router-dom';
import './FeaturedProduct.styles.scss';

const FeaturedProduct = ({ title, imageUrl, price, history: { push }, id }) => {
    const handleClick = useCallback(
        () => {
            push(`/product/${id}`)
        },
        [push, id],
    )
    return (
        <div className="featured-product">
            <div className="featured-image" onClick={handleClick}>
                <img src={imageUrl} alt="product" />
            </div>
            <div className="name-price">
                <h3>{title}</h3>
                <p>$ {price}</p>
                <button className="button is-black nomad-btn">
                    ADD TO CART
                </button>
            </div>
        </div>
    )
}

export default withRouter(memo(FeaturedProduct))
