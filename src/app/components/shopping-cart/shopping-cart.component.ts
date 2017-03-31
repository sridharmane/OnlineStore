import { Component, OnInit } from '@angular/core';
import { ShoppingCartService } from '../../services';
@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss']
})
export class ShoppingCartComponent implements OnInit {
  cartItems = this.cartService.cartItems;
  totalItems = 0;
  cartTotal = 0;

  constructor(
    private cartService: ShoppingCartService
  ) {
    this.cartItems.subscribe(items => {
      // reset counters every time the cart items change
      this.totalItems = 0;
      this.cartTotal = 0;
      items.forEach(item => {
        // att item cost to cart total
        this.cartTotal += item.totalCost;
        // keep the decimal places to 2 decimals
        this.cartTotal = Number.parseFloat(this.cartTotal.toFixed(2));
        this.totalItems += item.quantity;
      });
    });
  }

  /**
   * +/- quantity of the cart item.
   * @param itemName
   * @param quantity
   */
  updateQuantity(itemName: string, quantity: number) {
    const items = this.cartItems.getValue();
    for (let i = 0; i < items.length; i++) {
      if (items[i].itemName === itemName) {
        items[i].quantity += quantity;
        break;
      }
    }
    this.cartItems.next(items);
    this.cartService.updateQuantity(itemName, quantity);
  }

  /**
   * Clears all items in the cart
   */
  clearCart() {
    this.cartService.removeAllItems();
  }

  /**
   * Persists the quantities purchased and clears the cart
   */
  confirmPurchase() {
    this.cartService.confirmPurchase();
  }

  /**
   * Removes the items from the cart
   * @param itemName
   */
  removeItem(itemName: string) {
    this.cartService.removeItem(itemName);
  }


  ngOnInit() { }

}
