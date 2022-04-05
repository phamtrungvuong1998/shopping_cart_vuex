<template>
  <div id="product_list">
    <button class="btn btn-success v_btn-add" v-if="!isShowFormAddProduct" @click="showFormAddProduct()">Thêm sản phẩm</button>
    <div class="col-xs-12 col-sm-12 col-md-5 col-lg-5">
      <div class="panel panel-primary">
        <div class="panel-heading"><h1 class="panel-title">List Products</h1></div>
        <div class="panel-body" id="list-product">
          <ProductItem v-for="(product, index) in products" :key="index" :product="product"></ProductItem>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ProductItem from "./ProductItem.vue";
import { mapState, mapMutations } from 'vuex';
export default {
  name: "ProductList",
  components: {
    ProductItem
  },
  computed: {
    ...mapState({
      isShowFormAddProduct: state => state.moduleProduct.isShowFormAddProduct,
      products: state => state.moduleProduct.productList
    })
  },
  methods: {
    ...mapMutations({
      toggleFormAddProduct: 'moduleProduct/showFormAddProduct'
    }),
    showFormAddProduct(){
      this.toggleFormAddProduct();
    }
  }
}
</script>

<style scoped>
  .v_btn-add{
    display: block;
    margin-left: 15px;
    margin-bottom: 15px;
  }
</style>
