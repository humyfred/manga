'use strict';
import { connect } from 'react-redux'
import { toViewList } from '../actions/frame'
import CardDetail from '../components/CardDetail'
import { browserHistory } from 'react-router'



const mapStateToProps = (state) => {
  let loadState ;
  if(state.viewDetailImgs.length>0){
    loadState = 'dis-hide';
  }else{
    loadState = '';
  }
  return {
    viewDetailState: state.viewDetailState,
    viewDetailImgs:state.viewDetailImgs,
    title:'我的帖子',
    loadState:loadState
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onClick: (id) => {
      browserHistory.goBack();
      dispatch(toViewList(id))
    }
  }
}

const VisibleCardDetail = connect(
  mapStateToProps,mapDispatchToProps)(CardDetail)

export default VisibleCardDetail
