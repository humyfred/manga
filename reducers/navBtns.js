'use strict';

let datas = [{
  id:0,
  name:'漫画',
  iconName:'svgmoban67'
},{
  id:1,
  name:'漫画',
  iconName:'svgmoban67'
},{
  id:2,
  name:'漫画',
  iconName:'svgmoban67'
},{
  id:3,
  name:'漫画',
  iconName:'svgmoban67'
},{
  id:4,
  name:'漫画',
  iconName:'svgmoban67'
},{
  id:5,
  name:'漫画',
  iconName:'svgmoban67'
}];
let idx = 5;

const navBtns = (state =[],action) =>{
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