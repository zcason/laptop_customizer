import React from 'react';
import USCurrencyFormat from './CurrencyFormat';

function Cart(props) {
    return (
        <div className="summary__total__value">
            {USCurrencyFormat.format(props.total)}
        </div>
    )
}

export default Cart;