'use strict';
import {combineReducers } from 'redux'

let datas = [];
//let idx = 5;

const CartoonCardList = (state = [], action) => {
  switch (action.type) {
    case 'CARTOON_LIST':
    datas = action.list;
    return datas;
    default:
      return datas;
  }
}




export default CartoonCardList
