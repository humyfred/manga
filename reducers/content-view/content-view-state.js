'use strict';
//内容页面的展示情况（隐藏、展示）
const contentViewState = (state,action) =>{
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
export default contentViewState
