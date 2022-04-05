const moduleCart = {
  namespaced: true,
  state: {
    cartList: JSON.parse(localStorage.getItem('cart')) == null ? [] : JSON.parse(localStorage.getItem('cart'))
  },
  mutations: {
    addCartList(state, data){
      if (data.amount == 0){
        alert("Số lượng phải lớn hơn 0");
      }else{
        const itemIndex = state.cartList.findIndex(cart => cart.id == data.id);
        if (itemIndex == -1) {
          state.cartList.push(data);
        } else {
          state.cartList[itemIndex].amount = Number(state.cartList[itemIndex].amount) + Number(data.amount);
          state.cartList[itemIndex].subTotal = Number(state.cartList[itemIndex].amount) * Number(data.price);
        }
        localStorage.setItem('cart', JSON.stringify(state.cartList));

      }
    },
    de(state){
      console.log(state);
    }
  }
}
export default moduleCart

