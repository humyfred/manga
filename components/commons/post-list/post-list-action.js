
export const initLoadingState = (props) => {
    if(props.posts.length===0){
      return {
        loadState :'show',
      }
    }else {
      return {
        loadState :'hide',
      }
    }
}

export const loadData = (props) => {
  if(props.posts.length===0 && !props.isFetching){
    props.loadData();
  }
}
