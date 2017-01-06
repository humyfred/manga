import React from 'react'
import App from '../components/App'
import index from '../components/modules/index'
import postModule from '../components/modules/post'
import { Route, IndexRoute } from 'react-router'

const createRoutes = (
  < Route path = "/" component = { App } >
  < IndexRoute component = { index }/>
  < Route path = "manga" component = { index }/>
  < Route path = "post" component = { postModule }/>
  < Route path = "me" component = { index }/>
  < /Route >
)


export default createRoutes
