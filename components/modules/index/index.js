'use strict';
import React,{Component , PropTypes} from 'react'
import CartoonCardList from '../../../containers/cartoon-card/cartoon-card-list'
import Tabs from '../../commons/tabs/tabs'

class Index extends Component {

    constructor(props){
      super(props)
    }

    render(){
      return (
        <div>
          <CartoonCardList />

          <Tabs />
        </div>
      )
    }

}


Index.propTypes = {

}


export default Index
