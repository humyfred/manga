'use strict';
import { connect } from 'react-redux';
import { toViewDetail, toViewList } from '../../actions/commons';
import userInfor from '../../components/commons/user-infor/user-infor';
import { browserHistory } from 'react-router'


const mapStateToProps = (state) => {

  return {userInfor:state.userInfor};
};


const mapDispatchToProps = (dispatch) => {
  return {
    back: () => {
      browserHistory.goBack();
    }
  };
};

const UserInfor = connect(
  mapStateToProps,
  mapDispatchToProps
)(userInfor);

export default UserInfor;
