/*
action types
*/

export const searchFrame = (text)  =>{
  return{
    type:'SEARCH_FRAME',
    text
  }

}


export const addTodo = (text) => {
  return {
    type: 'ADD_TODO',
    text
  }
}

export const setVisibilityFilter = (filter) => {
  return {
    type: 'SET_VISIBILITY_FILTER',
    filter
  }
}

export const toggleTodo = (id) => {
  return {
    type: 'TOGGLE_TODO',
    id
  }
}
