'use strict';
import React,{Component , PropTypes} from 'react'
import DropdownLoadingPlugin from './dropdownLoadingPlugin'
//import './cartoon-card.scss'

class DropdownLoading extends Component {

    constructor(props){
      super(props);

    }

    render(){
      return (
        <div className='' onClick={this.props.onClick}>
          
        </div>
      )
    }

}


DropdownLoading.propTypes = {
}


export default DropdownLoading
