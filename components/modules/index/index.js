'use strict';
import React,{Component , PropTypes} from 'react'
import CartoonCardList from '../../../containers/cartoon-card/cartoon-card-list'
import tabs from '../../commons/tabs/tabs'

class Index extends Component {

    constructor(props){
      super(props)
    }

    render(){
      return (
        <div>
          <CartoonCardList />

          <tabs />
        </div>
      )
    }

}


Index.propTypes = {

}


export default Index
