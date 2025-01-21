import { defineStore } from "pinia";
import { NotifyError, NotifySuccess } from "~/lib/notify";
import type { TypesProduct } from "~/types/_Product";

interface TypesCartItem extends TypesProduct  {
    quantity: number,
    total: () => number
}

export const useCartStore = defineStore('cart', () => {
    const CartItems = ref<TypesCartItem[]>([])

    function addItem(product: TypesProduct, quantity = 1){
        const index = CartItems.value.findIndex(item => item.id == product.id)
        if (index <= -1) {
          CartItems.value.push({...product, quantity, total: () => product.price * quantity})
          return NotifySuccess('Item added to cart 😋')
        }
        let item = CartItems.value[index]
        item.quantity = quantity
        item.total = () => item.price * quantity
        CartItems.value[index] = item
        return NotifySuccess('Item already added to cart 😋', 'top-right')
    }

    function removeItem(productId: number){
        const index =  CartItems.value.findIndex(item => item.id == productId)
        if (index >= 0) {
            CartItems.value.splice(index, 1)
        }
        return NotifyError('Item deleted from cart 😔', 'top-right')
    }
})