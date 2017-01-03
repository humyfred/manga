'use strict';
//列表页面的展示情况（展示、隐藏）
const indexViewState = (state,action) =>{
  switch(action.type) {
    case 'VIEW_CONTENT':
      return 'jx-view jx-view__under';
      break;
    case 'NO_VIEW_CONTENT':
      return 'jx-view jx-view__show';

      break;
    default:
      return 'jx-view jx-view__show';
  }
}


export default indexViewState
