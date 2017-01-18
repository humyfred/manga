'use strict';
import React,{Component, PropTypes} from 'react'
import CartoonCard from '../cartoon-card/cartoon-card'
import Loading from '../Loading/Loading'
import { initLoadingState } from './cartoon-card-list-action.js'

class CartoonCardList extends Component {

  render(){
    Object.assign(this,initLoadingState(this.props));
    return (
      <section className={this.props.indexViewState+' jx-bottom-50'} >
        {this.props.CartoonCards.map(cartoonCard =>
          <CartoonCard
            key = {cartoonCard.id}
            {...cartoonCard}
            onClick={() =>this.props.detail(cartoonCard)}
            />
        )}

        <Loading showState={this.loadState}/>
      </section>
    )
  }

}


CartoonCardList.propTypes = {
  //   CartoonCards:PropTypes.arrayOf(PropTypes.shape({
  //     imgSrc: PropTypes.string.isRequired,
  //     title: PropTypes.string.isRequired
  // }).isRequired).isRequired,
    indexViewState:PropTypes.string.isRequired,
    detail: PropTypes.func.isRequired
}


export default CartoonCardList
