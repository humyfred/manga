'use strict';
import { connect } from 'react-redux';
import { toViewDetail, toViewList } from '../../actions/commons';
import the_me from '../../components/commons/me/me';



const mapStateToProps = (state) => {

  return {me:state.me.me,tabContent:state.me.tabContent};
};


const mapDispatchToProps = (dispatch) => {
  return {
    back: () => {
      dispatch(toViewList());
    }
  };
};

const Me = connect(
  mapStateToProps,
  mapDispatchToProps
)(the_me);

export default Me;
