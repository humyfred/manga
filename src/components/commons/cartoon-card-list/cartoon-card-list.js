'use strict';
import React, { Component, PropTypes } from 'react'
import CartoonCard from '../cartoon-card/cartoon-card'
import Loading from '../Loading/Loading'
import { initLoadingState, loadData, loadCartoon } from './cartoon-card-list-action.js'
import AlloyTouch from '../../../plugins/alloy_touch.css.js'
import Transform from '../../../plugins/transform.js'

class CartoonCardList extends Component {

    constructor(props) {
        super(props);

        //this.init();
    }

    init() {

        new AlloyTouch({
            touch: "#cartoon", //反馈触摸的dom
            vertical: true, //不必需，默认是true代表监听竖直方向touch
            target: this.scroller, //运动的对象
            property: "translateY", //被滚动的属性
            initialValue: 0,
            min: window.innerHeight - 45 - 48 - 2000, //不必需,滚动属性的最小值
            max: 0, //不必需,滚动属性的最大值
            change: function(value) {


            },
            touchMove: function(evt, value) {

            },
            touchEnd: function(evt, value) {

            }
        });
    }

    componentWillReceiveProps(props) {

    }

    shouldComponentUpdate(nextProps, nextState) {
        if (this.props === nextProps) {
            return false;
        }
        return true
    }

    componentDidMount() {
        loadData(this);
    }

    componentDidUpdate() {
        loadData(this);
    }

    render() {
        return ( < section className = { this.props.indexViewState + ' jx-bottom-50' } >
            <
            div id = "cartoon" > {
                this.props.CartoonCards.map(cartoonCard =>
                    <
                    CartoonCard key = { cartoonCard.id } {...cartoonCard }
                    onClick = {
                        () => this.props.detail(cartoonCard)
                    }
                    />
                )
            } <
            /div> < 
            Loading showState = { this.loadState }
            /> < /
            section >
        )
    }

}


CartoonCardList.propTypes = {
    //   CartoonCards:PropTypes.arrayOf(PropTypes.shape({
    //     imgSrc: PropTypes.string.isRequired,
    //     title: PropTypes.string.isRequired
    // }).isRequired).isRequired,
    indexViewState: PropTypes.string.isRequired,
    detail: PropTypes.func.isRequired
}


export default CartoonCardList