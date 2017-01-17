
export const initLoadingState = (props) => {
    if(props.CartoonCards.length===0){
      loadData(props);
      return {
        loadState :'show',
      }
    }else {
      return {
        loadState :'hide',
      }
    }
}

const loadData = (props) => {
  if(props.CartoonCards.length===0){
    props.loadData();
  }
}
