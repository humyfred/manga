'use strict';
import React,{Component , PropTypes} from 'react';
import CartoonCardList from '../../../containers/cartoon-card/cartoon-card-list';
import ContentWrap from '../../../containers/content-wrap/content-wrap';
import Tabs from '../../commons/tabs/tabs';

class Index extends Component {

    constructor(props){
      super(props);
    }

    render(){
      return (
        <div className="jx-view-wrap">
          <CartoonCardList />
          <ContentWrap />
          <Tabs />
        </div>
      )
    }

}


Index.propTypes = {

}


export default Index
