'use strict';

const me = (state = [], action) => {
  switch (action.type) {
    case 'ME_SETTING':
        return {};
    default:
       return {
        me:{
          avator:'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1740907959,1531109126&fm=23&gp=0.jpg',
          name:'小熊',
          autograph:'。。。。。'
        },
        tabContent:'1111'
      };
  }
}

export default me
