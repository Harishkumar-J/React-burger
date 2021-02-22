// import React, { Component } from 'react';

// import Auxil from '../../hoc/Auxil';
// import Burger from '../../components/Burger/Burger';
// import BuildControls from '../../components/Burger/BuildControls/BuildControls';
// import Modal from '../../components/UI/Modal/Modal';
// import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';
// import Spinner from '../../components/UI/Spinner/spinner';
// import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';
// import axios from '../../axios-order';

// import {connect} from 'react-redux';
// import * as actionTypes from '../../store/actions/actionTypes';


// // const INGREDIENT_PRICES = {
// //     salad: 0.5,
// //     cheese: 0.4,
// //     meat: 1.3,
// //     bacon: 0.7
// // };

// class BurgerBuilder extends Component {
//     // constructor(props) {
//     //     super(props);
//     //     this.state = {...}
//     // }
//     state = {
//         // ingredients: null,
//         // totalPrice: 4,
//         // purchasable: false,
//         purchasing: false,
//         loading: false,
//         error: false
//     }

//     componentDidMount () {
//         console.log(this.props);
//         // axios.get( 'https://react-burger-e01a7.firebaseio.com/ingredients.json' )
//         //     .then( response => {
//         //         this.setState( { ingredients: response.data } );
//         //     } )
//         //     .catch( error => {
//         //         this.setState( { error: true } );
//         //     } );
//     }

//     // updatePurchaseState ( ingredients ) {
//     //     const sum = Object.keys( ingredients )
//     //         .map( igKey => {
//     //             return ingredients[igKey];
//     //         } )
//     //         .reduce( ( sum, el ) => {
//     //             return sum + el;
//     //         }, 0 );
//     //     this.setState( { purchasable: sum > 0 } );
//     // }
//     updatePurchaseState ( ingredients ) {
//         const sum = Object.keys( ingredients )
//             .map( igKey => {
//                 return ingredients[igKey];
//             } )
//             .reduce( ( sum, el ) => {
//                 return sum + el;
//             }, 0 );
//         return sum > 0;
//     } 
//     // addIngredientHandler = ( type ) => {
//     //     const oldCount = this.state.ingredients[type];
//     //     const updatedCount = oldCount + 1;
//     //     const updatedIngredients = {
//     //         ...this.state.ingredients
//     //     };
//     //     updatedIngredients[type] = updatedCount;
//     //     const priceAddition = INGREDIENT_PRICES[type];
//     //     const oldPrice = this.state.totalPrice;
//     //     const newPrice = oldPrice + priceAddition;
//     //     this.setState( { totalPrice: newPrice, ingredients: updatedIngredients } );
//     //     this.updatePurchaseState( updatedIngredients );
//     // }

//     // removeIngredientHandler = ( type ) => {
//     //     const oldCount = this.state.ingredients[type];
//     //     if ( oldCount <= 0 ) {
//     //         return;
//     //     }
//     //     const updatedCount = oldCount - 1;
//     //     const updatedIngredients = {
//     //         ...this.state.ingredients
//     //     };
//     //     updatedIngredients[type] = updatedCount;
//     //     const priceDeduction = INGREDIENT_PRICES[type];
//     //     const oldPrice = this.state.totalPrice;
//     //     const newPrice = oldPrice - priceDeduction;
//     //     this.setState( { totalPrice: newPrice, ingredients: updatedIngredients } );
//     //     this.updatePurchaseState( updatedIngredients );
//     // }

//     purchaseHandler = () => {
//         this.setState( { purchasing: true } );
//     }

//     purchaseCancelHandler = () => {
//         this.setState( { purchasing: false } );
//     }

//     // purchaseContinueHandler = () => {
//     //     // alert('You continue!');
        
//     //     const queryParams = [];
//     //     for (let i in this.state.ingredients) {
//     //         queryParams.push(encodeURIComponent(i) + '=' + encodeURIComponent(this.state.ingredients[i]));
//     //     }
//     //     queryParams.push('price=' + this.props.price);
//     //     const queryString = queryParams.join('&');
//     //     this.props.history.push({
//     //         pathname: '/checkout',
//     //         search: '?' + queryString
//     //     });
//     // }

//     purchaseContinueHandler = () => {
//         this.props.history.push('/checkout');
//     }
    
//     render () {
//         const disabledInfo = {
//             // ...this.state.ingredients
//             ...this.props.ings
//         };
//         for ( let key in disabledInfo ) {
//             disabledInfo[key] = disabledInfo[key] <= 0
//         }
//         let orderSummary = null;
//         let burger = this.state.error ? <p>Ingredients can't be loaded!</p> : <Spinner />;

//         // if ( this.state.ingredients ) {
//         if ( this.props.ings ) {
//             burger = (
//                 <Auxil>
//                     <Burger ingredients={this.props.ings} />
//                     <BuildControls
//                         ingredientAdded={this.props.onIngredientAdded}
//                         ingredientRemoved={this.props.onIngredientRemoved}
//                         disabled={disabledInfo}
//                         purchasable={this.updatePurchaseState(this.props.ings)}
//                         ordered={this.purchaseHandler}
//                         price={this.props.price} />
//                 </Auxil>
//             );
//             orderSummary = <OrderSummary
//                 ingredients={this.props.ings}
//                 price={this.props.price}
//                 purchaseCancelled={this.purchaseCancelHandler}
//                 purchaseContinued={this.purchaseContinueHandler} />;
//         }
//         if ( this.state.loading ) {
//             orderSummary = <Spinner />;
//         }
//         // {salad: true, meat: false, ...}
//         return (
//             <Auxil>
//                 <Modal show={this.state.purchasing} modalClosed={this.purchaseCancelHandler}>
//                     {orderSummary}
//                 </Modal>
//                 {burger}
//             </Auxil>
//         );
//     }
// }


// const mapStateToProps = state =>{
//     return {
//         ings: state.ingredients,
//         price: state.totalPrice
//     }
// }

// const mapDispatchToProps = dispatch => {
//     return {
//         onIngredientAdded: (ingName) => dispatch({type:actionTypes.ADD_INGREDIENT, ingredientName: ingName}),
//         onIngredientRemoved: (ingName) => dispatch({type:actionTypes.REMOVE_INGREDIENT, ingredientName: ingName})
//     }    
// }
// export default connect(mapStateToProps,mapDispatchToProps)(withErrorHandler( BurgerBuilder, axios ));

import React, { Component } from 'react';

import Auxil from '../../hoc/Auxil';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';
import Spinner from '../../components/UI/Spinner/spinner';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';
import axios from '../../axios-order';

import {connect} from 'react-redux';
import * as actions from '../../store/actions/index';

class BurgerBuilder extends Component {
    state = {
        purchasing: false
    }

    componentDidMount () {
        // console.log(this.props);
        this.props.onInitIngredients();
    }

    updatePurchaseState ( ingredients ) {
        const sum = Object.keys( ingredients )
            .map( igKey => {
                return ingredients[igKey];
            } )
            .reduce( ( sum, el ) => {
                return sum + el;
            }, 0 );
        return sum > 0;
    }

    purchaseHandler = () => {
        if(this.props.isAuthenticated) {
            this.setState( { purchasing: true } );
        }else{
            this.props.onSetAuthRedirectPath('/checkout');
            this.props.history.push('/auth');
        }
    }

    purchaseCancelHandler = () => {
        this.setState( { purchasing: false } );
    }

    purchaseContinueHandler = () => {
        this.props.onInitPurchase();
        this.props.history.push('/checkout');
    }
    
    render () {
        const disabledInfo = {
            ...this.props.ings
        };
        for ( let key in disabledInfo ) {
            disabledInfo[key] = disabledInfo[key] <= 0
        }
        let orderSummary = null;
        let burger = this.props.error ? <p>Ingredients can't be loaded!</p> : <Spinner />;

        if ( this.props.ings ) {
            burger = (
                <Auxil>
                    <Burger ingredients={this.props.ings} />
                    <BuildControls
                        ingredientAdded={this.props.onIngredientAdded}
                        ingredientRemoved={this.props.onIngredientRemoved}
                        disabled={disabledInfo}
                        purchasable={this.updatePurchaseState(this.props.ings)}
                        ordered={this.purchaseHandler}
                        price={this.props.price} 
                        isAuth={this.props.isAuthenticated}/>
                </Auxil>
            );
            orderSummary = <OrderSummary
                ingredients={this.props.ings}
                price={this.props.price}
                purchaseCancelled={this.purchaseCancelHandler}
                purchaseContinued={this.purchaseContinueHandler} />;
        }
        if ( this.state.loading ) {
            orderSummary = <Spinner />;
        }
        return (
            <Auxil>
                <Modal show={this.state.purchasing} modalClosed={this.purchaseCancelHandler}>
                    {orderSummary}
                </Modal>
                {burger}
            </Auxil>
        );
    }
}


const mapStateToProps = state =>{
    return {
        ings: state.burgerBuilder.ingredients,
        price: state.burgerBuilder.totalPrice,
        error: state.burgerBuilder.error,
        isAuthenticated: state.auth.token !== null
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onIngredientAdded: (ingName) => dispatch(actions.addIngredient(ingName)),
        onIngredientRemoved: (ingName) => dispatch(actions.removeIngredient(ingName)),
        onInitIngredients: () => dispatch(actions.initIngredients()),
        onInitPurchase: () => dispatch(actions.purchaseInit()),
        onSetAuthRedirectPath: (path) => dispatch(actions.setAuthRedirectPath(path))
    }    
}
export default connect(mapStateToProps,mapDispatchToProps)(withErrorHandler( BurgerBuilder, axios ));