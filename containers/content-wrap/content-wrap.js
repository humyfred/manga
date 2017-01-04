'use strict';
import { connect } from 'react-redux'
import { toViewDetail, toViewList } from '../../actions/commons'
import ContentWrapComponent from '../../components/commons/content-wrap/content-wrap'
import CartoonCardContent from '../../components/commons/cartoon-card-content/cartoon-card-content'
import { browserHistory } from 'react-router'



const mapStateToProps = (state) => {

  return {
    contentViewState: state.contentViewState ,
    content:state.content.obj,
    loadState:'hide'
  }
}


const mapDispatchToProps = (dispatch) => {
  return {
    back: () => {
      dispatch(toViewList());
    }
  }
}

const contentWrap = connect(
  mapStateToProps,
  mapDispatchToProps
)(ContentWrapComponent)

export default contentWrap
