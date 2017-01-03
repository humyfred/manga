'use strict';
const viewContent = (state,action) =>{
  switch(action.type) {
    case 'VIEW_CONTENT':
      return 'jx-view jx-view__show';
      break;
    case 'NO_VIEW_CONTENT':
      return 'jx-view jx-view__hidden';

      break;
    default:
      return 'jx-view jx-view__hidden';
  }
}
export default viewContent
