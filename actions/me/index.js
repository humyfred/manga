export const toViewMe = ()  =>{
  return{
    type:'ME_CONTENT',
  }
}


export const toViewSubscribe = () =>{
  return {
    type: 'ME_VIEW_SUBSCRIBE'
  }
}

export const toViewPost = () =>{
  return {
    type: 'ME_VIEW_POST'
  }
}

export const toViewLike = () =>{
  return {
    type: 'ME_VIEW_LIKE'
  }
}
