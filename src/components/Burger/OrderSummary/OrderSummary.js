import React,{Component} from 'react';
import Auxil from '../../../hoc/Auxil'
import Button from '../../UI/Button/Button'

class OrderSummary extends Component{
    
    // componentDidUpdate(){
    //      console.log('[OrderSummary] DidMount')
    // }
    
    render(){
        const ingredientSummary = Object.keys(this.props.ingredients)
        .map( igKeys => {
            return (
                <li key = {igKeys}>
                <span style={{textTransform:'capitalize'}}>{igKeys}</span>
             : {this.props.ingredients[igKeys]}</li> );
        } );

        return(
            <Auxil>
        <h3>Your Order</h3>
        <p>A delicious burger with the following ingredients</p>
        <ul>
            {ingredientSummary }
        </ul>
    <p><strong>Total Price : {this.props.price.toFixed(2)}</strong></p>
        <p>Continue to CheckOut?</p>
        <Button btnType="Danger" clicked={this.props.purchaseCancelled}>CANCEL</Button>
        <Button btnType="Success" clicked={this.props.purchaseContinued}>CONTINUE</Button>

    </Auxil>
        )
    }
}

export default OrderSummary;
