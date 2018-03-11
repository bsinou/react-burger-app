
import React from 'react';

import Aux from '../../../hoc/Aux'


const orderSummary = (props) => {

    const ingredientSummary = Object.keys(props.ingredients)
        .map( key => <li key={key}>
            <span style={{ textTransform: 'capitilize' }}>{key}
            </span>: {props.ingredients[key]}</li>);

    return (
        <Aux> 
            <h3>Your Ordered</h3>
            <p>A delicious burger with following ingredients:</p>
            <ul>
                {ingredientSummary}
            </ul>
        </Aux>
    );

};

export default orderSummary;   