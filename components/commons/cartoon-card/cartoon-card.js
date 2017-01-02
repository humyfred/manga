'use strict';
import React,{Component , PropTypes} from 'react'
import './cartoon-card.scss'

class CartoonCard extends Component {

    constructor(props){
      super(props)
    }

    render(){
      return (
        <div className='jx-card' onClick={this.props.onClick}>
            <a href='javascript:void(0);' className='jx-card-avator'>
                <img src={this.props.imgSrc}/>
            </a>
            <p className='jx-card-title'>{this.props.title}<br/>{this.props.chapter}</p>
        </div>
      )
    }

}


CartoonCard.propTypes = {
  imgSrc:PropTypes.string.isRequired,
  chapter:PropTypes.string.isRequired,
  resource:PropTypes.string.isRequired,
  title:PropTypes.string.isRequired
}


export default CartoonCard
