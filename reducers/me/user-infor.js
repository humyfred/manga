'use strict';
let obj = {
title:'个人资料',
avator:'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1740907959,1531109126&fm=23&gp=0.jpg',
nickname:'小熊',
email:'513407656@qq.com'
};

const userInfor = (state = [], action) => {
  switch (action.type) {
    case 'USER_INFOR':
        return obj;
    default:
       return obj;
  }
}

export default userInfor
