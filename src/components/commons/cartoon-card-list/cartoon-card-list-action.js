
export const initLoadingState = (props) => {
    if(props.CartoonCards.length===0){
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
  if(props.CartoonCards.length===0){
    props.loadData();
  }
}
