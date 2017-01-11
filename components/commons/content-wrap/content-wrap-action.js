/*
action types
*/
import React from 'react'
import CartoonCardContent from '../cartoon-card-content/cartoon-card-content'
import PostContent from '../post-content/post-content'

export const initLoadingState = (props) => {
    if(props.contentWrap.type==='MANGA_REQUEST_POSTS'||props.contentWrap.type==='POST_REQUEST_POSTS'){
      return {
        loadState :'show',
      }
    }else {
      return {
        loadState :'hide',
      }
    }
}

const cartoonView = (content)  =>{
  return (
    <CartoonCardContent imgs={content.imgs} />
  );

}

const postView = (content)  =>{
  return (
    <PostContent {...content} />
  )
}

const meView = (content)  =>{
  return content.imgs.map(
      img => <img src={img}/>
    );
}
export const view = (props)  =>{
if(props.contentWrap.type==='CARTOON_CONTENT'){
   return  cartoonView(props.cartoonCard);
 }else if(props.contentWrap.type==='POST_CONTENT'){
   return  postView(props.post);
 }else if(props.contentWrap.type==='NO_VIEW_CONTENT'){
    if(props.contentWrap.loadBefore==='cartoon'){//继续展示之前的页面，保持不操作dom
      return  cartoonView(props.cartoonCard);
    }else{
      return  postView(props.post);
    }
  }else {
    return '';
  }
}
