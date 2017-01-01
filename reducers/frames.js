'use strict';

let datas = [{
  id:0,
  imgSrc:'http://img01.ishuhui.com/yz/515/yzs.png',
  chapter:' BIG TIME CHANGE ㉕',
  resource:'http://www.ishuhui.com/post/375940',
  title:'鸭子的天空 第515话 '
},{
  id:1,
  imgSrc:'http://img02.ishuhui.com/bojin/mei07/bjs.jpg',
  chapter:' 死亡的宣告',
  resource:'http://www.ishuhui.com/post/375935',
  title:'铂金终局 第7话'
},{
  id:2,
  imgSrc:'http://img01.ishuhui.com/yz/515/yzs.png',
  chapter:' BIG TIME CHANGE ㉕',
  resource:'http://www.ishuhui.com/post/375940',
  title:'鸭子的天空 第515话 '
},{
  id:3,
  imgSrc:'http://img01.ishuhui.com/op/shao825/ops.png',
  chapter:' 世经上的连环画',
  resource:'http://www.ishuhui.com/post/375945',
  title:'草帽少年 第825话 '
},{
  id:4,
  imgSrc:'http://img01.ishuhui.com/yz/515/yzs.png',
  chapter:' BIG TIME CHANGE ㉕',
  resource:'http://www.ishuhui.com/post/375940',
  title:'鸭子的天空 第515话 '
}];
let idx = 5;

const frames = (state =[],action) =>{
    switch(action.type){
        case 'SEARCH_FRAME':
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





export default frames