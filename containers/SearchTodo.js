import React from 'react'
import {connect} from 'react-redux'
import { searchFrame } from '../actions'
import { Link, browserHistory } from 'react-router'
let input ;

let SearchTodo = ({dispatch}) =>(
    <div className='md-searchBarWrapper'>
        <input ref={node =>{input =node}} />
        <button onClick={()=>{dispatch(searchFrame(input.value));input.value='';}}>
            搜索
        </button>
        <button onClick={() =>{browserHistory.goBack()}}>go back</button>
    </div>
)

SearchTodo = connect()(SearchTodo)

export default SearchTodo