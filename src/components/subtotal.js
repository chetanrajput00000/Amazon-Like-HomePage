import React from 'react';
import './subtotal.css';
import CurrencyFormat from 'react-currency-format';
import { useStateValue } from './stateProvider';

function Subtotal() {
  const [{ cart }, dispatch] = useStateValue();

// Calculate subtotal
const subtotal = cart.reduce((total, item) => total + item.price,0);

  return (
    <div className='subtotal'>
      {/* React code to display subtotal */}
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              Subtotal ({cart.length} items): <strong>{value}</strong>
            </p>
            <small className="subtotal_gift">
              <input type="checkbox" /> This order contains a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={subtotal}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"₹"}
      />

      <button>Proceed to Checkout</button>
    </div>
  );
}

export default Subtotal;
