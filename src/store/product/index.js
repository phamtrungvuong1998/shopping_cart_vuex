const moduleProduct = {
  namespaced: true,
  state: {
    isShowFormAddProduct: false,
    productList: localStorage.getItem('product') == null ? [] : JSON.parse(localStorage.getItem('product'))
  },
  mutations: {
    showFormAddProduct(state){
      state.isShowFormAddProduct = !state.isShowFormAddProduct;
    },
    addProductList(state,dataProduct){
      state.productList.push(dataProduct);
      localStorage.setItem('product', JSON.stringify(state.productList));
    },
    decrementProductlist(state, data){
      let indexProduct = state.productList.findIndex(product => data.id == product.id);
      state.productList[indexProduct].amountProduct = Number(state.productList[indexProduct].amountProduct) - Number(data.amount);
      localStorage.setItem('product', JSON.stringify(state.productList));
    }
  },
  plugin: [
    store => {
      store.subscribe((mutation, state) => {
          state.productList = JSON.parse(localStorage.getItem('product'));

      })
    }
  ]
}
export default moduleProduct

