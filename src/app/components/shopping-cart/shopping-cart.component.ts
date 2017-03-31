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
  totalCost = 0;
  constructor(
    private cartService: ShoppingCartService
  ) {
    this.cartItems.subscribe(items => {
      // reset counters every time the cart items change
      this.totalItems = 0;
      this.totalCost = 0;
      items.forEach(item => {
        this.totalCost += item.totalCost;
        this.totalItems += item.quantity;
      });
    });
  }
  updateQuantity(itemName: string, quantity: number) {
    let items = this.cartItems.getValue();
    for (let i = 0; i < items.length; i++) {
      if (items[i].itemName === itemName) {
        items[i].quantity += quantity;
        break;
      }
    }
    this.cartItems.next(items);
    this.cartService.updateQuantity(itemName, quantity);
  }

  clearCart(){
    this.cartService.removeAllItems();
  }
  confirmPurchase(){
    this.cartService.confirmPurchase();
  }

  removeItem(itemName:string){
    this.cartService.removeItem(itemName);
  }


  ngOnInit() {

  }

}
