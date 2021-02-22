import React from 'react';
import classes from './Burger.module.css'
import BurgerIngredients from './BurgerIngredients/BurgerIngredients'
// import {withRouter} from 'react-router-dom';

const burger = (props) => {
    //  console.log(props);
    let transformedIngredients = Object.keys(props.ingredients)
        .map( igKey => {
            return [...Array(props.ingredients[igKey])].map((_,i) =>{
                return <BurgerIngredients key={igKey + i} type={igKey} />
            });
        })
        .reduce((arr,ele) => {
            return arr.concat(ele)
        },[]);
        console.log( Object.values(props.ingredients))

    // let ing=Object.keys(props.ingredients)
    // let count=Object.values(props.ingredients)
    // let pp=[]


    if( transformedIngredients.length === 0){
        transformedIngredients = <p>Please add some Ingredients!</p>
    }


    return (
        <div className = {classes.Burger}>
            <BurgerIngredients type='bread-top' />
            {transformedIngredients}
            <BurgerIngredients type='bread-bottom' />
        </div>
    )
}                                    
export default burger;
// export default withRouter( burger ); 