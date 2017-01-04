'use strict';
const contentWrap = (state,action) =>{
  switch(action.type) {
    case 'CARTOON_CONTENT':
      return {content:action.content,type:'CARTOON_CONTENT'};
    case 'POST_CONTENT':
      return {content:action.content,type:'POST_CONTENT'};
    case 'ME_CONTENT':
      return {content:action.content,type:'ME_CONTENT'};
    default:
      return {content:{},type:''};
  }
}
export default contentWrap
