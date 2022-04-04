const moduleProduct = {
  namespaced: true,
  state: {
    isShowFormAddProduct: false,
    productList: JSON.parse(localStorage.getItem('product'))
  },
  mutations: {
    showFormAddProduct(state){
      state.isShowFormAddProduct = !state.isShowFormAddProduct;
    }
  }
}
export default moduleProduct

