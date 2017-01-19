'use strict';
import {combineReducers } from 'redux'

let datas = [];
//let idx = 5;

const CartoonCardList = (state = {isFetching:false,items:[]}, action) => {
  switch (action.type) {
    case 'CARTOON_LIST':
    return Object.assign({},state,{
      items: action.list,
      isFetching: false
    })
    case 'CARTOON_REQUEST_LIST':
    return Object.assign({},state,{
      isFetching: true
    })
    default:
      return state;
  }
}




export default CartoonCardList
