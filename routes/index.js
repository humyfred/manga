import React from 'react'
import App from '../components/App'
import SearchTodo from '../containers/SearchTodo'
import AddTodo from '../containers/AddTodo'
import VisibleCards from '../containers/VisibleCards'
import VisibleFrames from '../containers/VisibleFrames'
import Home from '../components/Home'
import Nav from '../components/Nav'
import FrameWrapper from '../components/FrameWrapper'
import CardWrapper from '../components/CardWrapper'

import { Route, IndexRoute } from 'react-router'

const createRoutes = (
  <Route path="/" component={App} >
    <IndexRoute component={Nav}/>
    <Route path="manga" component={FrameWrapper}/>
    <Route path="cards" component={CardWrapper}/>
    <Route path="about" component={AddTodo} />
    <Route path="news" component={SearchTodo}/>
  </Route>
)


export default createRoutes
