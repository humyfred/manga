/*
action types
*/
import React from 'react'
import CartoonCardContent from '../cartoon-card-content/cartoon-card-content'
import PostContent from '../post-content/post-content'

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
export const view = (contentWrap)  =>{
  if(contentWrap.type==='CARTOON_CONTENT'){
   return  cartoonView(contentWrap.content);
 }else if(contentWrap.type==='POST_CONTENT'){
   return  postView(contentWrap.content);
 }else if(contentWrap.type==='ME_CONTENT'){
   return  meView(contentWrap.content);
  }else{
    return '';
  }
}
