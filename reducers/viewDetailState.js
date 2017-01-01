'use strict';
const viewDetailState = (state,action) =>{
  switch(action.type) {
    case 'FRAME_VIEWDETAIL':
      return 'md-view show';
      break;
    case 'FRAME_VIEWLIST':
      return 'md-view hidden';
      
      break;
    default:
      return 'md-view hidden';
  }
}
export default viewDetailState