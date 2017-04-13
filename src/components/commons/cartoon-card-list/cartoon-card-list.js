'use strict';
import React,{Component, PropTypes} from 'react'
import CartoonCard from '../cartoon-card/cartoon-card'
import Loading from '../Loading/Loading'
import { initLoadingState, loadData } from './cartoon-card-list-action.js'
import AlloyTouch from '../../../plugins/alloy_touch.css.js'
import Transform from '../../../plugins/transform.js'
//import DropdownLoading from '../dropdown-loading/dropdown-loading'

class CartoonCardList extends Component {

  init(){
    new AlloyTouch({
      touch: "#wrapper",//反馈触摸的dom
      vertical: true,//不必需，默认是true代表监听竖直方向touch
      target: scroller, //运动的对象
      property: "translateY",  //被滚动的属性
      initialValue: 0,
      min: window.innerHeight - 45 - 48 - 2000, //不必需,滚动属性的最小值
      max: 0, //不必需,滚动属性的最大值
      change: function (value) {
          pull_refresh.translateY = value;
      },
      touchMove: function (evt, value) {
          if (value > 70) {
              //http://caniuse.com/#search=classList
              arrow.classList.add("arrow_up");
          } else {
              arrow.classList.remove("arrow_up");
          }
      },
      touchEnd: function (evt, value) {
          if (value > 70) {
              this.to(60);
              mockRequest(this);
              return false;
          }
      }
    });

    function mockRequest(at) {
     pull_refresh.classList.add("refreshing");
     setTimeout(function () {
         var i = 0,
             len = 3;
         for (; i < len; i++) {
             var li = document.createElement("li");
             li.innerHTML = "new row " + index++;
             list.insertBefore(li, list.firstChild);
         }
         arrow.classList.remove("arrow_up");
         pull_refresh.classList.remove("refreshing");
         at.to(at.initialValue);
         at.min -= 40 * 3;
     }, 500);
   }
  }

  componentWillMount(){
    loadData(this.props);
    Object.assign(this,initLoadingState(this.props));
  }
  componentWillReceiveProps(props){
    Object.assign(this,initLoadingState(props));
  }

  componentDidMount(){

  }

  render(){
    return (
      <section  className={this.props.indexViewState + ' jx-bottom-50'} >
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
