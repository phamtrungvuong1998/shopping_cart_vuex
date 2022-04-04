<template>
  <div class="v_modal" id="myModal" role="dialog" v-if="isShowFormAddProduct">
    <div class="modal-dialog">
      <!-- Modal content-->
      <div class="modal-content">
        <div class="modal-header">
          <button type="button" class="close" data-dismiss="modal">&times;</button>
          <h4 class="modal-title">Thêm sản phẩm</h4>
        </div>
        <div class="v_container">
          <div class="form-group">
            <label for="usr">Tên:</label>
            <input type="text" class="form-control" id="usr">
          </div>
          <div class="form-group">
            <label for="pwd">Giá:</label>
            <input type="password" class="form-control" id="pwd">
          </div>
          <div class="form-group">
            <label for="pwd">Số lượng:</label>
            <input type="password" class="form-control" id="pwd">
          </div>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-default" data-dismiss="modal" @click="showFormAddProduct()">Close</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex';
export default {
  name: "addProduct",
  computed: {
    ...mapState({
      isShowFormAddProduct: state => state.moduleProduct.isShowFormAddProduct,
    })
  },
  methods: {
    ...mapMutations({
      showFormAddProduct2: 'moduleProduct/showFormAddProduct'
    }),
    showFormAddProduct(){
      this.showFormAddProduct2();
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
