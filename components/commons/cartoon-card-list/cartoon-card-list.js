'use strict';
import React,{Component, PropTypes} from 'react'
import CartoonCard from '../cartoon-card/cartoon-card'
import Loading from '../Loading/Loading'
import { initLoadingState, loadData } from './cartoon-card-list-action.js'
//import DropdownLoading from '../dropdown-loading/dropdown-loading'

class CartoonCardList extends Component {

  componentWillMount(){
    setTimeout(function(){
      new dropdownLoading({
        target: document.querySelector('#cartoon'),
        loading:function(){
          var self = this;
          setTimeout(function(){
            console.log(1);
            self.recover(s);
          },3000);
        }
      });
    },0)
    loadData(this.props);
    Object.assign(this,initLoadingState(this.props));
  }
  componentWillReceiveProps(props){
    Object.assign(this,initLoadingState(props));
  }

  render(){
    return (
      <section  className={this.props.indexViewState+' jx-bottom-50'} >
        <div id="cartoon">
        {this.props.CartoonCards.map(cartoonCard =>
          <CartoonCard
            key = {cartoonCard.id}
            {...cartoonCard}
            onClick={() =>this.props.detail(cartoonCard)}
            />
        )}
        </div>
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
