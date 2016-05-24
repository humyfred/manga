'use strict';
import React,{PropTypes} from 'react'
import { Link, browserHistory } from 'react-router'
import SearchBar from './SearchBar'

const Nav = () =>(
  <div  className='layout-ab of-hidden'>
    <SearchBar />
    <div className='layout-ab of-auto mt48'>
    <ul className='md-nav cf'>
       <li>
          <Link to="/manga">
        <a className='circleBtn'>
          <i className='iconfont icon-svgmoban67 icon-big icon-blue'></i>
        </a>
        <span>漫画</span>
        </Link>
        </li>
        <li>
          <Link to="/about">
          <a className='circleBtn'>
          <i className='iconfont icon-zhoubian icon-big icon-blue'></i>
        </a>
        <span>周边</span>
      </Link>
        </li>
        <li>
          <Link to="/news">
          <a className='circleBtn'>
          <i className='iconfont icon-suini-new-1 icon-big icon-blue'></i>
        </a>
        <span>消息</span>
        </Link>
        </li>
        <li>
          <Link to="/cards">
          <a className='circleBtn'>
          <i className='iconfont icon-pinglun icon-big icon-blue'></i>
        </a>
        <span>帖子</span>
        </Link>
        </li>
        <li>
          <Link to="game">
          <a className='circleBtn'>
          <i className='iconfont icon-youxi icon-big icon-blue'></i>
        </a>
        <span>游戏</span>
        </Link>
        </li>
        <li>
          <Link to="/me">
          <a className='circleBtn'>
          <i className='iconfont icon-wo icon-big icon-blue'></i>
        </a>
        <span>我</span>
        </Link>
        </li>
    </ul>
    </div>
  </div>
)


export default Nav
