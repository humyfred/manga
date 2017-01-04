/*
action types
*/
import React from 'react'

const cartoonView = (content)  =>{
  return content.imgs.map(
      img => <img key={img} src={img}/>
    );

}

const postView = (content)  =>{
  return content.imgs.map(
      img => <img src={img}/>
    );
}

const meView = (content)  =>{
  return content.imgs.map(
      img => <img src={img}/>
    );
}
export const view = (content)  =>{
  if(content.type==='CARTOON_CONTENT'){
   return  cartoonView(content.content);
  }else if(content.type==='POST_CONTENT'){
   return  postView(content.content);
  }else if(content.type==='ME_CONTENT'){
   return  meView(content.content);
  }else{
    return '';
  }
}
