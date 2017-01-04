'use strict';
//列表页面的展示情况（展示、隐藏）
const indexViewState = (state,action) =>{
  switch(action.type) {
    case 'VIEW_CONTENT':
    case 'CARTOON_CONTENT':
    case 'POST_CONTENT':
    case 'ME_CONTENT':
      return 'jx-view jx-view__under';
    case 'NO_VIEW_CONTENT':
      return 'jx-view jx-view__show';
    default:
      return 'jx-view jx-view__show';
  }
}


export default indexViewState
