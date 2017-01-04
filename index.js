import 'babel-polyfill'
import React from 'react'
import { render } from 'react-dom'
import thunkMiddleware from 'redux-thunk'
import createLogger from 'redux-logger'
import { createStore , applyMiddleware , compose} from 'redux'
import { Provider } from 'react-redux'
import { Router, browserHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'
import reducers from './reducers'
import routes from './routes'
//import './resource/css/build/global.css'
import './resource/less/build/global.scss'

const loggerMiddleware = createLogger()

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;//redux-devtool-extension

let store = createStore(reducers, composeEnhancers ( applyMiddleware(
  thunkMiddleware,// 允许我们 dispatch() 函数
  loggerMiddleware // 一个很便捷的 middleware，用来打印 action 日志
)))

// Create an enhanced history that syncs navigation events with the store
const history = syncHistoryWithStore(browserHistory, store)

render( <Provider store = { store }>
  <Router history = { history } children = { routes } />
  </Provider>,
  document.getElementById('root')
)
