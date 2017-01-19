const CartoonCard= (state = [], action) => {//缓存当前实例
  switch (action.type) {
    case 'CARTOON_CONTENT':
      state = action.content;
      return state;
    default:
      return state;
  }
}
export default CartoonCard
