'use strict';
let obj = {
 me:{
   avator:'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1740907959,1531109126&fm=23&gp=0.jpg',
   name:'小熊',
   autograph:'多情自古伤离别'
 },
 nav:{name:'subscribe'},
 tabContent:'1111'
};

const me = (state = obj, action) => {
  switch (action.type) {
    case 'ME_SETTING':
        return Object.assign({}, state, {nav:{name:'subscribe'}});
    case 'ME_VIEW_SUBSCRIBE':
        return Object.assign({}, state, {nav:{name:'subscribe'},tabContent:'1111'});
    case 'ME_VIEW_POST':
        return Object.assign({}, state, {nav:{name:'post'},tabContent:'2222'});
    case 'ME_VIEW_LIKE':
        return Object.assign({}, state, {nav:{name:'like'},tabContent:'3333'});
    default:
       return state;
  }
}


/**
切忌Object.assign(obj,{...});
返回的结果引用是obj,redux的组件connect会保存该应用，用于判断state区别，如果按照刚才例子，缓存的结果也是obj,判断的结果会是一样
只有Object.assign({},obj,{...});每次的结果都是新创建的对象
*/
export default me
