<template>
    <!-- PRODUCT : START -->
    <div class="media product">
      <div class="media-body">
        <h4 class="media-heading">{{product.nameProduct}}</h4>
        <input name="quantity-product-1" type="number" value="1" min="1" v-model="amount">
        <p>Số lượng : {{product.amountProduct}}</p>
        <p>Đơn giá : {{product.priceProduct}}</p>
        <button data-product="1" href="#" class="price btn btn-success" @click="addCart()" v-if="product.amountProduct > 0"> {{product.priceProduct}} USD </button>
        <button data-product="1" href="#" class="price btn btn-danger" v-if="product.amountProduct == 0"> Hết hàng</button>
      </div>
    </div>
    <!-- PRODUCT : END -->
</template>

<script>
import {mapMutations} from "vuex";
export default {
  name: "ProductItem",
  props: {
    product: Object
  },
  methods: {
    ...mapMutations({
      addCartList: "moduleCart/addCartList",
      checkAmountProduct: "moduleProduct/checkAmountProduct",
      decrementProductlist: "moduleProduct/decrementProductlist"
    }),
    addCart(){
        if (Number(this.product.amountProduct) < Number(this.amount)){
          alert("Số lượng không phù hợp");
        }else{
          const objCart = {
            id: this.product.id,
            name: this.product.nameProduct,
            price: this.product.priceProduct,
            amount: this.amount,
            subTotal: this.product.priceProduct * this.amount
          }
          this.decrementProductlist(objCart);
          this.addCartList(objCart);
        }
    }
  },
  data(){
    return {
      amount: 1
    }
  }
}
</script>

<style scoped>

</style>
