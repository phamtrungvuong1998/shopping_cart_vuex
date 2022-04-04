<template>
  <div id="app">
    <AddProduct></AddProduct>
    <div class="container">
      <!-- TITLE : START -->
      <div class="page-header">
        <h1>Project 02 - Shopping Cart <small>VueJS + VueX</small></h1>
      </div>
      <!-- TITLE : END -->

      <div class="row">
        <!-- LIST PRODUCT : START -->
        <ProductList></ProductList>
        <!-- LIST PRODUCT : END -->

        <!-- CART : START -->
        <Cart></Cart>
        <!-- CART : END -->
      </div>
    </div>
  </div>
</template>

<script>
import ProductList from "./components/ProductList";
import Cart from "./components/Cart";
import AddProduct from "./components/AddProduct";
import { mapState } from 'vuex';
export default {
  name: 'app',
  data () {
    return {

    }
  },
  computed:{
    ...mapState({
        productList: state => state.moduleProduct.productList
    }),
  },
  components: {
    ProductList,
    Cart,
    AddProduct
  }
}
</script>

<style>

</style>
