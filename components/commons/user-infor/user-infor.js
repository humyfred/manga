'use strict';
import React,{ Component , PropTypes} from 'react'
import { Link, browserHistory } from 'react-router'
import './user-infor.scss'
import '../content-wrap/content-wrap.scss'

class UserInfor extends Component {

  constructor(props){
    super(props);
  }

  render(){
    return (
      <section className='jx-content-wrap' style={{background:'#f2f2f2'}}>
        <header className='jx-content-header flex vertical-middle'>
          <a className="icon-btn " onClick={()=>this.props.back()} ><i className='iconfont icon-back icon-middle' ></i></a>
          <span className='ml15 jx-content-title'>{this.props.userInfor.title}</span>
          <a className='icon-btn' style={{padding: '14px 0'}}>编辑</a>
        </header>

        <div className='jx-content'>
            <div className="jx-infor">
              <div className='jx-infor-item cf'>
                <div className="jx-infor-item__name">
                  头像
                </div>
                <div className="jx-infor-item__value">
                  <img src={this.props.userInfor.avator}/>
                </div>
              </div>

              <div className='jx-infor-item cf'>
                <div className="jx-infor-item__name">
                  昵称
                </div>
                <div className="jx-infor-item__value">
                  {this.props.userInfor.nickname}
                </div>
              </div>

              <div className='jx-infor-item cf'>
                <div className="jx-infor-item__name">
                  邮箱
                </div>
                <div className="jx-infor-item__value">
                  {this.props.userInfor.email}
                </div>
              </div>
            </div>
        </div>

      </section>
    )
  }
}

UserInfor.propTypes = {

}


export default UserInfor
