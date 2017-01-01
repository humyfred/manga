'use strict';

let datas = [{
  id:0,
  imgSrc:'http://img01.ishuhui.com/yz/515/yzs.png',
  title:'你好吗三个字',
  reply:44,
  views:23112
},{
  id:1,
  imgSrc:'http://img01.ishuhui.com/yz/515/yzs.png',
  title:'你好吗三个字',
  reply:44,
  views:23112
},{
  id:2,
  imgSrc:'http://img01.ishuhui.com/yz/515/yzs.png',
  title:'你好吗三个字',
  reply:44,
  views:23112
},{
  id:3,
  imgSrc:'http://img01.ishuhui.com/yz/515/yzs.png',
  title:'你好吗三个字',
  reply:44,
  views:23112
},{
  id:4,
  imgSrc:'http://img01.ishuhui.com/yz/515/yzs.png',
  title:'你好吗三个字',
  reply:44,
  views:23112
}];
let idx = 5;

const cards = (state =[],action) =>{
    switch(action.type){
        case 'CARD_LIST':
            return [
              ...state,
              {
                id:idx++,
                chapter:'世经上的连环画',
                imgSrc:'http://img01.ishuhui.com/op/shao825/ops.png',
                resource:'http://www.ishuhui.com/post/375945',
                title:'草帽少年 第825话'
              }
            ]
        default:
            return datas;
    }
}





export default cards
