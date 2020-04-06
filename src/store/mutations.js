export default {
  addCounter(state, payload) {
    payload.count++
  },

  addToCart(state, payload) {
    payload.checked = true;
    state.cartList.push(payload)
  },

  cancelCheckAll(state) {
    state.cartList.forEach(item => item.checked = false)
  },

  checkAll(state) {
    state.cartList.forEach(item => item.checked = true)
  },

  checkClick(state, id) {
    state.cartList.find(item => item.id == id).checked = !state.cartList.find(item => item.id == id).checked
  },

  reduceNum(state, id) {
    state.cartList.find(item => item.id == id).count-=1
  },

  increaseNum(state, id) {
    state.cartList.find(item => item.id == id).count+=1
  },
}