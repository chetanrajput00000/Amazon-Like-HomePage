import React from 'react'
import '../components/product.css'
import { useStateValue } from './stateProvider';

function Product({ id, title, price, image, rating }) {
    const [{ cart }, dispatch] = useStateValue();

    console.log('this is your cart', cart);

    const addToCart = () => {
        // dispatch the item into the data layer
        // and add to cart in case add_to_cart
        dispatch({
            type: "ADD_TO_CART",
            item: {
                id: id,
                title: title,
                image: image,
                price: price,
                rating: rating,
            },
        });
    };

    return (
        <div className='product'>
            <div className="product_info">
                <p>{title}</p>
                <p className="product_price">
                    <small>₹</small>
                    <strong>{price}</strong>
                </p>
                <div className="product_rating">
                    {/* Use a unique key for each star */}
                    {Array(rating)
                        .fill()
                        .map((_, i) => (
                            <p key={i}>🌟</p>
                        ))}
                </div>
            </div>
            <img src={image} alt="product Image" />
            <button onClick={addToCart}>Add to cart</button>
        </div>
    )
}

export default Product;
