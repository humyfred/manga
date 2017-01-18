'use strict';

let loadPageBefore = '';//缓存之前展示的页面
let beforeTitle = '';

const contentWrap = (state = {type:'',title:'', isFetching : false ,actionType:''},action) =>{
  switch(action.type) {
    case 'CARTOON_REQUEST_VIEW':
    case 'POST_REQUEST_VIEW':
      beforeTitle = action.title;
      return Object.assign({},state,{title:action.title, isFetching : true});
    case 'NO_VIEW_CONTENT'://退出详细页面
      return Object.assign({},state,{loadBefore:loadPageBefore,title:beforeTitle, isFetching : false});
    case 'CARTOON_CONTENT':
      loadPageBefore= 'cartoon';
      beforeTitle = action.title;
      return Object.assign({},state,{title:action.title, isFetching : false,actionType:'CARTOON_CONTENT'});
    case 'POST_CONTENT':
      loadPageBefore= 'post';
      beforeTitle = action.title;
      return Object.assign({},state,{title:action.title, isFetching : false,actionType:'POST_CONTENT'});
    default:
      return state;
  }
}
export default contentWrap
