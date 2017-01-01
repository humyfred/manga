'use strict';
const viewListState = (state,action) =>{
  switch(action.type) {
    case 'FRAME_VIEWDETAIL':
      return 'md-view under';
      break;
    case 'FRAME_VIEWLIST':
      return 'md-view show';
      
      break;
    default:
      return 'md-view show';
  }
}


export default viewListState 