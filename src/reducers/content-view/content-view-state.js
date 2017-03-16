'use strict';
const viewContent = (state,action) =>{
  switch(action.type) {
    case 'VIEW_CONTENT':
    case 'CARTOON_CONTENT':
    case 'POST_CONTENT':
    case 'MANGA_REQUEST_POSTS':
    case 'POST_REQUEST_POSTS':
      return 'jx-view jx-view__show';
    default://'NO_VIEW_CONTENT'
      return 'jx-view jx-view__hidden';
  }
}
export default viewContent
