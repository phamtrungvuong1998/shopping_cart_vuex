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
              <th>Pokemon</th>
              <th width="15%">Price</th>
              <th width="4%">Quantity</th>
              <th width="20%">Subtotal</th>
              <th width="25%">Action</th>
            </tr>
            </thead>
            <CartItem></CartItem>
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
export default {
  name: "Cart",
  components: {
    CartItem,
    CartConfirm,
    CartFooter
  }
}
</script>

<style scoped>

</style>
