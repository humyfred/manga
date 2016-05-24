'use strict';
import { connect } from 'react-redux'
import { toViewDetail } from '../actions/frame'
import FrameList from '../components/FrameList'
import { browserHistory } from 'react-router'



const mapStateToProps = (state) => {
  return {
    frames: state.frames ,
    viewListState :state.viewListState
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onTodoClick: (id) => {
      browserHistory.push('manga/viewDetail');
      dispatch(toViewDetail(id));
    },
    goBack: () => {
       browserHistory.goBack();
    }
  }
}

const VisibleFrames = connect(
  mapStateToProps,
  mapDispatchToProps
)(FrameList)

export default VisibleFrames
