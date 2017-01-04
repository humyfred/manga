'use strict';
const content = (state,action) =>{
  switch(action.type) {
    case 'CARTOON_CONTENT':
      return {obj:action.obj,type:'CARTOON_CONTENT'};
    case 'POST_CONTENT':
      return {obj:action.obj,type:'POST_CONTENT'};
    case 'ME_CONTENT':
      return {obj:action.obj,type:'ME_CONTENT'};
    default:
      return {obj:{}};
  }
}
export default content
