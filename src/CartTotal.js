import React from 'react';
import USCurrencyFormat from './CurrencyFormat';

function Cart(props) {
    return (
        <div className="summary__total">
            <div className="summary__total__label">Total</div>
            <div className="summary__total__value">
                {USCurrencyFormat.format(props.total)}
            </div>
        </div>
    )
}

export default Cart;