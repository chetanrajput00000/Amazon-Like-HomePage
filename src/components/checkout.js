import React from 'react';
import { useStateValue } from '../components/stateProvider'; 
import Subtotal from '../components/subtotal';
import './checkout.css';
import CheckoutProduct from '../components/checkoutProduct';

function Checkout() {
  const [{ cart }] = useStateValue(); 

  return (
    <div className='checkout'>
      <div className="checkout_left">
        <img className="checkout_ad" src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg" alt="Error" />
        <div>
          <h2 className='checkout_title'>Your Shopping Cart</h2>
          
          {cart.map(item => (
            <CheckoutProduct
              // key={item.id} 
              id={item.id}
              title={item.title}
              image={item.image}
              price={item.price}
              rating={item.rating} 
            />
          ))}
        </div>
      </div>

      <div className="checkout_right">
        <Subtotal />
      </div>
    </div>
  );
}

export default Checkout;
