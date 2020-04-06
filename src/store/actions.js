export default {
  //商品数据添加进购物车
  addCart(context, payload) {
    return new Promise((resolve, reject) => {
      let oldProduct = context.state.cartList.find(item => item.id == payload.id);
      if (oldProduct) {
        context.commit('addCounter', oldProduct);
        resolve('添加成功，在购物车等亲~')
      }
      else {
        payload.count = 1;
        context.commit('addToCart', payload);
        resolve('添加成功，在购物车等亲~')
      }
    })
  },
}