'use strict';
import { connect } from 'react-redux'
import { toViewList } from '../actions/frame'
import FrameDetail from '../components/FrameDetail'
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
    title:'海贼王',
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

const VisibleFrameDetail = connect(
  mapStateToProps,mapDispatchToProps)(FrameDetail)

export default VisibleFrameDetail
