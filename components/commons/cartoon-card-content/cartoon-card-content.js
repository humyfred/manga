'use strict';
import React,{Component , PropTypes} from 'react'
import './cartoon-card-content.scss'

class CartoonCardContent extends Component {

    constructor(props){
      super(props);
    }

    render(){
      return (
        {
          this.props.imgs.map( img =>
            <img src={img}/>
          )
        }
      )
    }

}


CartoonCardContent.propTypes = {

}


export default CartoonCardContent
