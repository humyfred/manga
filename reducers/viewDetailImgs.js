'use strict';

let data = [{id:0,imgSrc:'http://img.news.ishuhui.com/meiwen/0510hzbz/60.jpg'},{id:1,imgSrc:'http://img.news.ishuhui.com/meiwen/0510hzbz/61.jpg'},{id:2,imgSrc:'http://img.news.ishuhui.com/meiwen/0510hzbz/62.jpg'}];
const viewDetailImgs = (state,action) =>{
  switch(action.type) {
    case 'FRAME_VIEWDETAIL':
      return data;
      break;
    case 'FRAME_VIEWLIST':
      return data;
      
      break;
    default:
      return [];
  }
}


export default viewDetailImgs 