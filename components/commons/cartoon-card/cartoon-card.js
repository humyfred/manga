'use strict';
import React,{Component , PropTypes} from 'react'


class CartoonCard extends Component {

    constructor(props){
      super(props)
    }

    render(){
      return (
        <div className='jx-cardWrapper' onClick={this.props.onClick}>
            <img  className='avatar' src={this.props.imgSrc}/>
            <div className='cardName'>
              <span className='title'>{this.props.title}</span>
              <span className='other'>{this.props.reply}/{this.props.views}</span>
            </div>
        </div>
      )
    }

}


CartoonCard.propTypes = {
}


export default Cartoon-Card
