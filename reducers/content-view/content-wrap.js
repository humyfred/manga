'use strict';

let loadPageBefore = '';//缓存之前展示的页面
let beforeTitle = '';

const contentWrap = (state,action) =>{
  switch(action.type) {
    case 'MANGA_REQUEST_POSTS':
    case 'POST_REQUEST_POSTS':
      beforeTitle = action.title;
      return {type:action.type,title:action.title};
    case 'NO_VIEW_CONTENT'://退出详细页面
      return {type:action.type,loadBefore:loadPageBefore,title:beforeTitle};
    case 'CARTOON_CONTENT':
      loadPageBefore= 'cartoon';
      beforeTitle = action.title;
      return {type:action.type,title:action.title};
    case 'POST_CONTENT':
      loadPageBefore= 'post';
      beforeTitle = action.title;
      return {type:action.type,title:action.title};
    default:
      return {type:'',title:''};
  }
}
export default contentWrap
