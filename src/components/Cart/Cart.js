import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const cart = props.cart;
    // let totalPopulation = 0;
    // for (let i = 0; i < cart.length; i++) {
    //     const country = cart[i];
    //     totalPopulation = totalPopulation + country.population;

    // }
    const totalPopulation = cart.reduce((sum, county) => sum + county.population, 0);
    return (
        <div>
            <p>Total Population: {totalPopulation}</p>
        </div>
    );
};

export default Cart;