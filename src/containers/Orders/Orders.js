// import React, { Component } from 'react';

// import Order from '../../components/Order/Order';
// import axios from '../../axios-order';
// import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';

// class Orders extends Component {
//     state = {
//         orders: [],
//         loading: true
//     }

//     componentDidMount() {
//         axios.get('/orders.json')
//             .then(res => {
//                 const fetchedOrders = [];
//                 for (let key in res.data) {
//                     fetchedOrders.push({
//                         ...res.data[key],
//                         id: key
//                     });
//                 }
//                 this.setState({loading: false, orders: fetchedOrders});
//             })
//             .catch(err => {
//                 this.setState({loading: false});
//             });
//     }

//     render () {
//         return (
//             <div>
//                 {this.state.orders.map(order => (
//                     <Order 
//                         key={order.id}
//                         ingredients={order.ingredients}
//                         price={order.price} />
//                 ))}
//             </div>
//         );
//     }
// }

// export default withErrorHandler(Orders, axios);

// // import React,{Component} from 'react';
// // import Order from '../../components/Order/Order';

// // class Orders extends Component{
// //     render(){
// //         return(
// //             <div>
// //                 <Order />
// //                 <Order />
// //             </div>
            
// //         )
// //     }
// // }
// // export default Orders;

import React, { Component } from 'react';

import Order from '../../components/Order/Order';
import axios from '../../axios-order';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';

import * as actions from '../../store/actions/index';
import {connect} from 'react-redux';
import Spinner from '../../components/UI/Spinner/spinner'

class Orders extends Component {

    componentDidMount() {
        this.props.onFetchOrders(this.props.token,this.props.userId);
    }

    render () {
        let orders = <Spinner />;
        if(! this.props.loading) {
            orders = this.props.orders.map(order => (
                <Order 
                    key={order.id}
                    ingredients={order.ingredients}
                    price={order.price} />
            ))
            }
        
        return (
            <div>
                {orders}
            </div>
        );
    }
}
const mapStateToProps = state => {
    return{
        orders : state.order.orders,
        loading: state.order.loading,
        token: state.auth.token,
        userId : state.auth.userId
    }
}
const mapDispatchToProps = dispatch => {
    return {
        onFetchOrders : (token,userId) =>dispatch( actions.fetchOrders(token,userId))
    }
}

export default connect(mapStateToProps,mapDispatchToProps) (withErrorHandler(Orders, axios));
