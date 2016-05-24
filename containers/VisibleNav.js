'use strict';
import { connect } from 'react-redux'
import { toggleTodo } from '../actions'
import Nav from '../components/Nav'




const mapStateToProps = (state) => {
  return {
    navbtns: state.navbtns 
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    clicktoDo: (id) => {
      dispatch(toggleTodo(id))
    }
  }
}

const VisibleNav = connect(
  mapStateToProps,
  mapDispatchToProps
)(Nav)

export default VisibleNav
