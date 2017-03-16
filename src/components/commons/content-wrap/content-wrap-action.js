/*
action types
*/
import React from 'react'
import CartoonCardContent from '../cartoon-card-content/cartoon-card-content'
import PostContent from '../post-content/post-content'

export const initLoadingState = (props) => {
    if(props.contentWrap.type==='CARTOON_REQUEST_VIEW'||props.contentWrap.type==='POST_REQUEST_VIEW'){
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

export const view = (props)  =>{
if(props.contentWrap.actionType==='CARTOON_CONTENT'){
   return  cartoonView(props.cartoonCard);
 }else if(props.contentWrap.actionType==='POST_CONTENT'){
   return  postView(props.post);
 }else if(props.contentWrap.actionType==='NO_VIEW_CONTENT'){
    if(props.contentWrap.loadBefore==='cartoon'){//继续展示之前的页面，保持不操作dom
      return  cartoonView(props.cartoonCard);
    }else{
      return  postView(props.post);
    }
  }else {
    return '';
  }
}
