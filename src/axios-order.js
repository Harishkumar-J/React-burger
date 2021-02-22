import axios from 'axios';
// import React from 'react';

const instance = axios.create({
    baseURL : 'https://react-burger-e01a7.firebaseio.com/'
})

export default instance;