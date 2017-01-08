'use strict';
import { connect } from 'react-redux';
import { toViewDetail, toViewList } from '../../actions/commons';
import {toViewSubscribe,toViewPost, toViewLike } from '../../actions/me'
import the_me from '../../components/commons/me/me';



const mapStateToProps = (state) => {

  return {me:state.me.me,tabContent:state.me.tabContent,nav:state.me.nav};
};


const mapDispatchToProps = (dispatch) => {
  return {
    toViewSubscribe: () =>{
      dispatch(toViewSubscribe());
    },
    toViewPost: () =>{
      dispatch(toViewPost());
    },
    toViewLike: () =>{
      dispatch(toViewLike());
    }
  };
};

const Me = connect(
  mapStateToProps,
  mapDispatchToProps
)(the_me);

export default Me;
