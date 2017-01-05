'use strict';
import React,{Component , PropTypes} from 'react'
import './cartoon-card-content.scss'

class CartoonCardContent extends Component {

    constructor(props){
      super(props);
    }

    render(){
      return (
          <div>
          {
            this.props.imgs.map(
                img => <img key={img} src={img}/>
              )
          }
          </div>
      )
    }

}


CartoonCardContent.propTypes = {

}


export default CartoonCardContent
