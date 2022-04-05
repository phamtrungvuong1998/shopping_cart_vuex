<template>
    <tbody id="my-cart-body">
    <!-- CART BODY -->
      <tr>
      <th scope="row">1</th>
      <td>{{cart.name}}</td>
      <td>{{cart.price}} USD</td>
      <td><input name="cart-item-quantity-1" type="number" :value="cart.amount" min="1"></td>
      <td><strong>{{cart.subTotal}} USD</strong></td>
      <td>
        <button class="btn label label-info update-cart-item" href="#" data-product="">Update</button>
        <button class="btn label label-danger delete-cart-item" @click="deleteCart()">Delete</button>
      </td>
    </tr>
    </tbody>
</template>

<script>
import {mapMutations} from "vuex";
export default {
  name: "CartItem",
  props:{
    cart: Object
  },
  methods: {
    ...mapMutations({
      deleteCart: "moduleCart/deleteCart"
    }),
    deleteCart(){
      this.deleteCart();
    }
  }
}
</script>

<style scoped>

</style>
