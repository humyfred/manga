'use strict';
import React,{Component, PropTypes} from 'react'
import CartoonCard from '../cartoon-card/cartoon-card'


class CartoonCardList extends Component {

  render(){
    return (
      <section className={this.props.indexViewState} >
        {this.props.CartoonCards.map(cartoonCard =>
          <CartoonCard
            key = {cartoonCard.id}
            {...cartoonCard}
            onClick={() =>this.props.onTodoClick(cartoonCard.title)}
            />
        )}
      </section>
    )
  }

}


CartoonCardList.propTypes = {
    CartoonCards:PropTypes.arrayOf(PropTypes.shape({
      imgSrc: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired
  }).isRequired).isRequired,
    indexViewState:PropTypes.string.isRequired,
    onTodoClick: PropTypes.func.isRequired
}


export default CartoonCardList
