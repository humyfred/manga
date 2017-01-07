'use strict';
import { connect } from 'react-redux';
import { toViewDetail, toViewList } from '../../actions/commons';
import userInfor from '../../components/commons/user-infor/user-infor';



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

const UserInfor = connect(
  mapStateToProps,
  mapDispatchToProps
)(userInfor);

export default UserInfor;
