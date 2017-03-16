'use strict';
import { connect } from 'react-redux'
import { fetchCartoons , fetchCartoon } from '../../actions/cartoon-card'
import { toViewDetail } from '../../actions/commons';//转换场景
import CartoonCards from '../../components/commons/cartoon-card-list/cartoon-card-list'
import { browserHistory } from 'react-router'



const mapStateToProps = (state) => {
  return {
    CartoonCards: state.cartoonCardList.items,
    isFetching : state.cartoonCardList.isFetching,
    indexViewState :state.indexViewState
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    detail: (obj) => {
      dispatch(fetchCartoon(obj));
    },
    loadData : () => {
      dispatch(fetchCartoons());
    }
  }
}

const CartoonCardList = connect(
  mapStateToProps,
  mapDispatchToProps
)(CartoonCards)

export default CartoonCardList
