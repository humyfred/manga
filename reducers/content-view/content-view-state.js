'use strict';
const viewContent = (state,action) =>{
  switch(action.type) {
    case 'VIEW_CONTENT':
      return 'md-view show';
      break;
    case 'NO_VIEW_CONTENT':
      return 'md-view hidden';

      break;
    default:
      return 'md-view hidden';
  }
}
export default viewContent
