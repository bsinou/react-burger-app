
import React, { Component } from 'react';

import Aux from '../../../hoc/Aux/Aux'
import Button from '../../UI/Button/Button'

class OrderSummary extends Component {
    
    // componentWillUpdate(){
    //     console.log('[OrderSummary] will update');
    // }
    
    render() {
        const ingredientSummary = Object.keys(this.props.ingredients)
            .map(key => <li key={key}>
                <span style={{ textTransform: 'capitilize' }}>{key}
                </span>: {this.props.ingredients[key]}</li>);
        return (
            <Aux>
                <h3>Your Ordered</h3>
                <p>A delicious burger with following ingredients:</p>
                <ul>
                    {ingredientSummary}
                </ul>
                <p><strong>Total price: USD {this.props.price.toFixed(2)}</strong></p>
                <p> Continue to checkout?</p>
                <Button btnType="Danger" clicked={this.props.purchaseCancelled}>CANCEL</Button>
                <Button btnType="Success" clicked={this.props.purchaseContinued}>CONTINUE</Button>
            </Aux>
        );
    }
}

export default OrderSummary;   