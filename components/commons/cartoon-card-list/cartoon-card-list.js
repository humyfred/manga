'use strict';
import React,{Component, PropTypes} from 'react'
import CartoonCard from '../cartoon-card/cartoon-card'


class CartoonCardList extends Component {

  render(){
    return (
      <section className={this.props.viewListState} >
        <header className='header flex vertical-middle'>
          <i className='iconfont icon-btn icon-back icon-middle' onClick={() =>this.props.goBack()}></i>
          <span className='ml15'>漫画</span>
        </header>
        <div className='content mt48'>

        {this.props.CartoonCards.map(cartoonCard =>
          <CartoonCard
            key = {cartoonCard.id}
            {...cartoonCard}
            onClick={() =>this.props.onTodoClick(cartoonCard.title)}
            />
        )}
        </div>
      </section>
    )
  }

}


CartoonCardList.propTypes = {
    CartoonCard:PropTypes.arrayOf(PropTypes.shape({
      imgSrc: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired
  }).isRequired).isRequired,
    viewListState:PropTypes.string.isRequired,
    onTodoClick: PropTypes.func.isRequired
}


export default CartoonCardList
