'use strict';
import React,{Component , PropTypes} from 'react'
import './post-content.scss'

class PostContent extends Component {

    constructor(props){
      super(props);
    }

    render(){
      return (
          <div>
            <div className='jx-post-content__header'>
              <div className="jx-post"></div>
              <div className="jqbibWgUvFUt5sVWIJVOx5AroyURST6wGOGMJKcGkVZDkhCSvkP8SCVmskCtTEkJZoSgepoM9TmeS8uKpjo9aWTLRAYWA1RwoCh4EOuHZZPv2i1KYq784MTo7J3AWdyFBQpzAHYTcG3Rza5jGFEFOAzUkiijDv8A34evwNfgqofl"></div>
            </div>
          {
            this.props.imgs.map(
                img => <img key={img} src={img}/>
              )
          }
          </div>
      )
    }

}


PostContent.propTypes = {

}


export default PostContent
