
import React from 'react';
import './checkoutProduct.css'
import { useStateValue } from "../components/stateProvider";

function CheckoutProduct({ id, image, title, price, rating, hideButton }) {
    const [{ cart }, dispatch] = useStateValue();

    const removeFromcart = () => {
        dispatch({
            type: 'REMOVE_FROM_CART',
            id: id,
        })
    }

    return (
        <div className='checkoutProduct'>
            <img className='checkoutProduct__image' src={image} />

            <div className='checkoutProduct__info'>
                <p className='checkoutProduct__title'>{title}</p>
                <p className="checkoutProduct__price">
                    <small>₹</small>
                    <strong>{price}</strong>
                </p>
                <div className="checkoutProduct__rating">
                    {Array(rating)
                    .fill()
                    .map(() => (
                        <p>🌟</p>
                    ))}
                </div>
                {!hideButton && (
                    <button onClick={removeFromcart}>Remove from cart</button>
                )}
            </div>
        </div>
    )
}

export default CheckoutProduct;
