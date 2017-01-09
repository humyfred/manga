let cartoon = {};

const CartoonCard= (state = [], action) => {//缓存当前实例
  switch (action.type) {
    case 'CARTOON_CONTENT':
      cartoon = action.content;
      return cartoon;
    default:
      return cartoon;
  }
}
export default CartoonCard
