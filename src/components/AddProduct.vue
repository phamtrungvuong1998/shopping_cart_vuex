<template>
  <div class="v_modal" id="myModal" role="dialog" v-if="isShowFormAddProduct">
    <div class="modal-dialog">
      <!-- Modal content-->
      <div class="modal-content">
        <div class="modal-header">
          <button type="button" class="close" data-dismiss="modal" @click="showFormAddProduct()">&times;</button>
          <h4 class="modal-title">Thêm sản phẩm</h4>
        </div>
        <div class="v_container">
          <div class="form-group">
            <label for="usr">Tên:</label>
            <input type="text" class="form-control" id="usr" v-model="nameProduct">
          </div>
          <div class="form-group">
            <label for="pwd2">Giá:</label>
            <input type="number" class="form-control" id="pwd2" v-model="priceProduct">
          </div>
          <div class="form-group">
            <label for="pwd">Số lượng:</label>
            <input type="number" class="form-control" id="pwd" v-model="amountProduct">
          </div>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-success" data-dismiss="modal" @click="addProduct()">Thêm</button>
          <button type="button" class="btn btn-default" data-dismiss="modal" @click="showFormAddProduct()">Close</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex';
import uuidv4 from "../uuid";
export default {
  name: "addProduct",
  computed: {
    ...mapState({
      isShowFormAddProduct: state => state.moduleProduct.isShowFormAddProduct
    })
  },
  methods: {
    ...mapMutations({
      toggleFormAddProduct: 'moduleProduct/showFormAddProduct',
      addProductList: 'moduleProduct/addProductList'
    }),
    showFormAddProduct(){
      this.toggleFormAddProduct();
    },
    addProduct(){
      if (this.nameProduct == "" || this.priceProduct == "" || this.amountProduct == ""){
          alert("Điền đầy đủ thông tin");
      }else{
        const objProduct = {
          id: uuidv4(),
          nameProduct: this.nameProduct,
          priceProduct: this.priceProduct,
          amountProduct: this.amountProduct
        };
        this.nameProduct = "";
        this.priceProduct = "";
        this.amountProduct = "";
        this.addProductList(objProduct);
        this.toggleFormAddProduct();
      }
    }
  },
  data(){
    return {
      nameProduct: "",
      priceProduct: "",
      amountProduct: ""
    }
  }
}
</script>

<style scoped>
  .v_modal{
    position: fixed;
    z-index: 2;
    width: 100%;
  }
  .v_container{
    width: 90%;
    margin: 0 auto;
  }
</style>
