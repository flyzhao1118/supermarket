export default {
  //商品数据添加进购物车
  addCart(context, payload) {
    // let oldProduct = null;
    // for(let item of state.cartList) {
    //   if (item.id == payload.id) {
    //     oldProduct = item;
    //   }
    // }
    // if (oldProduct) {
    //   oldProduct.count +=1;
    // }
    // else {
    //   payload.count = 1;
    //   state.cartList.push(payload)
    // }
    let oldProduct = context.state.cartList.find(item => item.id == payload.id);
    if (oldProduct) {
      context.commit('addCounter', oldProduct);
    }
    else {
      payload.count = 1;
      context.commit('addToCart', payload);
    }
  }
}