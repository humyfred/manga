/*
action types
*/

const cartoonView = (content)  =>{
  return{
    content.imgs.map(
      img => <img src="img"/>
    )
  }

}

const postView = (content)  =>{
  return{
    content.imgs.map(
      img => <img src="img"/>
    )
  }

}

const meView = (content)  =>{
  return{
    content.imgs.map(
      img => <img src="img"/>
    )
  }

}
export const view = (content)  =>{
  if(content.type==='CARTOON_CONTENT'){
    cartoonView(content);
  }else if(content.type==='POST_CONTENT'){
    postView(content);
  }else {
    meView(content);
  }
}
