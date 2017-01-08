'use strict';
let obj = {
 me:{
   avator:'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1740907959,1531109126&fm=23&gp=0.jpg',
   name:'小熊',
   autograph:'多情自古伤离别'
 },
 tabContent:'1111'
};

const me = (state = [], action) => {
  switch (action.type) {
    case 'ME_SETTING':
        return Object.assign(obj,{nav:{name:'subscribe'}});
    case 'ME_VIEW_SUBSCRIBE':
        return Object.assign(obj,{nav:{name:'subscribe'},tabContent:'1111'});
    case 'ME_VIEW_POST':
        return Object.assign(obj,{nav:{name:'post'},tabContent:'2222'});
    case 'ME_VIEW_LIKE':
        return Object.assign(obj,{nav:{name:'like'},tabContent:'3333'});
    default:
       return obj;
  }
}

export default me
