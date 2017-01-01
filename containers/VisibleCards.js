'use strict';
import { connect } from 'react-redux'
import { toViewDetail } from '../actions/frame'
import CardList from '../components/CardList'
import { browserHistory } from 'react-router'



const mapStateToProps = (state) => {
  return {
    cards: state.cards,
    viewListState :state.viewListState
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onClick: (id) => {
      browserHistory.push('cards/viewDetail');
      dispatch(toViewDetail(id));
    },
    goBack:() =>{
      browserHistory.goBack();
    }
  }
}

const VisibleCards = connect(
  mapStateToProps,
  mapDispatchToProps
)(CardList)

export default VisibleCards
