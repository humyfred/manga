'use strict';
//列表页面的展示情况（展示、隐藏）
const indexViewState = (state,action) =>{
  switch(action.type) {
    case 'VIEW_CONTENT':
      return 'md-view under';
      break;
    case 'NO_VIEW_CONTENT':
      return 'md-view show';

      break;
    default:
      return 'md-view show';
  }
}


export default indexViewState
