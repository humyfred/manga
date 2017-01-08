import React from 'react'
import App from '../components/App'
import index from '../components/modules/index'
import postModule from '../components/modules/post'
import meModule from '../components/modules/me'
import userInfor from '../containers/me/user-infor'
import { Route, IndexRoute } from 'react-router'

const createRoutes = (
  < Route path = "/" component = { App } >
    <IndexRoute component = { index }/>
    <Route path = "/manga" component = { index }/>
    <Route path = "/post" component = { postModule }/>
    <Route path = "/me" component = { meModule }>
      <Route path = "setting" component = { userInfor }/>
    </Route>

  < /Route >
)


export default createRoutes
