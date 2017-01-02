'use strict';
import { connect } from 'react-redux'
import { toViewDetail } from '../../actions/frame'
import CartoonCards from '../../components/commons/cartoon-card-list/cartoon-card-list'
import { browserHistory } from 'react-router'



const mapStateToProps = (state) => {
  return {
    CartoonCards: state.cartoonCardList ,
    indexViewState :state.indexViewState
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onTodoClick: (id) => {
      //browserHistory.push('manga/viewDetail');
      dispatch(toViewDetail(id));
    }
  }
}

const CartoonCardList = connect(
  mapStateToProps,
  mapDispatchToProps
)(CartoonCards)

export default CartoonCardList
