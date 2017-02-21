'use strict';
import React,{Component , PropTypes} from 'react'
import
//import './cartoon-card.scss'

class DropdownLoading extends Component {

    constructor(props){
      super(props)
    }

    render(){
      return (
        <div className='' onClick={this.props.onClick}>
          {this.props.loadingChildren}
        </div>
      )
    }

}


DropdownLoading.propTypes = {
}


export default DropdownLoading
