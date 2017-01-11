'use strict';
//列表页面的展示情况（展示、隐藏）
const indexViewState = (state,action) =>{
  switch(action.type) {
    case 'VIEW_CONTENT':
    case 'CARTOON_CONTENT':
    case 'POST_CONTENT':
    case 'MANGA_REQUEST_POSTS':
    case 'POST_REQUEST_POSTS':
      return 'jx-view jx-view__under';
    default://'NO_VIEW_CONTENT':
      return 'jx-view jx-view__show';
  }
}


export default indexViewState
