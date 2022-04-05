<template>
  <div id="cart">
    <div class="col-xs-12 col-sm-12 col-md-7 col-lg-7">
      <div class="panel panel-info">
        <div class="panel-heading"><h1 class="panel-title">Your Cart</h1></div>
        <div class="panel-body">
          <table class="table">
            <thead>
            <tr>
              <th width="4%">#</th>
              <th>Name</th>
              <th width="15%">Price</th>
              <th width="4%">Quantity</th>
              <th width="20%">Subtotal</th>
              <th width="25%">Action</th>
            </tr>
            </thead>
            <CartItem v-for="(cart, index) in carts" :key="index" :cart="cart"></CartItem>
            <tfoot id="my-cart-footer">
            <!-- CART FOOTER -->
            <CartFooter></CartFooter>
            </tfoot>
          </table>

        </div>
      </div>
      <CartConfirm></CartConfirm>
    </div>
  </div>
</template>

<script>
import CartItem from "./CartItem";
import CartConfirm from "./CartConfirm";
import CartFooter from "./CartFooter";
import {mapState} from "vuex";
export default {
  computed : {
    ...mapState({
      carts: state => state.moduleCart.cartList,
    })
  },
  name: "Cart",
  components: {
    CartItem,
    CartConfirm,
    CartFooter
  },
  data(){
    return {

    }
  }
}
</script>

<style scoped>

</style>
