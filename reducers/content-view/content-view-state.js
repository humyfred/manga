'use strict';
const viewContent = (state,action) =>{
  switch(action.type) {
    case 'VIEW_CONTENT':
    case 'CARTOON_CONTENT':
    case 'POST_CONTENT':
    case 'ME_CONTENT':
      return 'jx-view jx-view__show';
    case 'NO_VIEW_CONTENT':
      return 'jx-view jx-view__hidden';

    default:
      return 'jx-view jx-view__hidden';
  }
}
export default viewContent
