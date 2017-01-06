export const toViewPost = (obj)  =>{
  return{
    type:'POST_CONTENT',
    content:Object.assign(obj,
      {imgs:['//pic04.ishuhui.com/cartoon/book-1/1/851-8152/00.png?87302690',
            '//pic04.ishuhui.com/cartoon/book-1/1/851-8152/03.png?87302690',
            '//pic04.ishuhui.com/cartoon/book-1/1/851-8152/04.png?87302690',
            '//pic04.ishuhui.com/cartoon/book-1/1/851-8152/05.png?87302690',
            '//pic04.ishuhui.com/cartoon/book-1/1/851-8152/06.png?87302690']
        })
  }
}
