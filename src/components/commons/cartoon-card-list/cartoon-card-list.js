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
            touch:"#wrapper",//反馈触摸的dom
            vertical: true,//不必需，默认是true代表监听竖直方向touch
            target: target, //运动的对象
            property: "translateY",  //被运动的属性
            min: 100, //不必需,运动属性的最小值
            max: 2000, //不必需,滚动属性的最大值
            sensitivity: 1,//不必需,触摸区域的灵敏度，默认值为1，可以为负数
            factor: 1,//不必需,表示触摸位移与被运动属性映射关系，默认值是1
            step: 45,//用于校正到step的整数倍
            bindSelf: false,
            initialValue: 0,
            change:function(value){  }, //不必需，属性改变的回调。alloytouch.css版本不支持该事件
            touchStart:function(evt, value){  },
            touchMove:function(evt, value){  },
            touchEnd:function(evt,value){  },
            tap:function(evt, value){  },
            pressMove:function(evt, value){  },
            animationEnd:function(value){  } //运动结束
          })
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
