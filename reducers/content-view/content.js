'use strict';
const content = (state,action) =>{
  switch(action.type) {
    case 'VIEW_CARTOON':
      return 'view_cartoon';
    default:
      return '';
  }
}
export default content
