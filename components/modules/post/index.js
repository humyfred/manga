'use strict';
import React,{Component , PropTypes} from 'react';
import PostList from '../../../containers/post/post-list';
import ContentWrap from '../../../containers/content-wrap/content-wrap';
import Tabs from '../../commons/tabs/tabs';

class postModule extends Component {

    constructor(props){
      super(props);
    }

    render(){
      return (
        <div className="jx-view-wrap">
          <PostList />
          <ContentWrap />
          <Tabs />
        </div>
      )
    }

}


postModule.propTypes = {

}


export default postModule
