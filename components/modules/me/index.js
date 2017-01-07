'use strict';
import React,{Component , PropTypes} from 'react';
import Me from '../../../containers/me/me';
import Tabs from '../../commons/tabs/tabs';

class meModule extends Component {

    constructor(props){
      super(props);
    }

    render(){
      return (
        <div className="jx-view-wrap">
          <Me />
          <Tabs />
        </div>
      )
    }

}


meModule.propTypes = {

}


export default meModule
