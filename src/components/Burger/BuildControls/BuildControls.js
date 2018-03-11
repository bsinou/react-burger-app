import React from 'react';
import BuildControl from './BuildControl/BuildControl';

import classes from './BuildControls.css';

const controls = [
    { label: 'Salad', type: 'salad' },
    { label: 'Bacon', type: 'bacon' },
    { label: 'Cheese', type: 'cheese' },
    { label: 'Meat', type: 'meat' },
];


const buildControls = (props) => (
    <div className={classes.BuildControls}>
        <p> Current Price: <strong>{props.currentPrice.toFixed(2)}  </strong></p>
        {controls.map(ctrl => (
            <BuildControl
                label={ctrl.label}
                key={ctrl.type}
                added={() => props.ingredientAdded(ctrl.type)}
                removed={() => props.ingredientRemoved(ctrl.type)}
                disabled={props.disabled[ctrl.type]}
            />
        ))}
        <button
            className={classes.OrderButton}
            onClick={props.purchase}
            disabled={!props.purchasable}>ORDER NOW</button>
    </div>
);

export default buildControls;