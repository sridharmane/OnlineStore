import { Injectable } from '@angular/core';
import { InventoryService } from './inventory.service';
import { ICartItem, IStoreItem } from '../types';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
@Injectable()
export class ShoppingCartService {
  // cartItemsSubject = new BehaviorSubject<ICartItem[]>([]);
  cartItems = new BehaviorSubject<ICartItem[]>([]);
  // cartItems: ICartItem[] = [];
  constructor(private inventory: InventoryService) { }

  addItem(item: IStoreItem) {
    // First check if item is already in cart
    // console.log('Adding item to Cart', item);
    let alreadyInCart = false;
    let cartItems = this.cartItems.getValue();
    for (let i = 0; i < cartItems.length; i++) {
      const cartItem = cartItems[i];
      if (cartItem.itemName === item.itemName) {
        cartItem.quantity += 1;
        cartItems[i] = cartItem;
        alreadyInCart = true;
        this.inventory.updateInventory(cartItem.itemName, 1);
        break;
      }
    }
    if (!alreadyInCart) {
      const newItem: ICartItem = this.createCartItemFromStoreItem(item);
      cartItems.push(newItem);
      this.inventory.updateInventory(newItem.itemName, newItem.quantity);
    }
    this.cartItems.next(cartItems);
  }

  createCartItemFromStoreItem(storeItem: IStoreItem): ICartItem {
    return new CartItem(storeItem);
  }

  removeItem(itemName: string) {
    let cartItems = this.cartItems.getValue();
    for (let i = 0; i < cartItems.length; i++) {
      if (cartItems[i].itemName === itemName) {

        const quantity = cartItems[i].quantity;
        console.log(`Putting back ${quantity} for ${cartItems[i].itemName}`);
        // put back the item quantity into the inventory
        this.inventory.updateInventory(itemName, -quantity);
        console.log('Before', cartItems);
        cartItems.splice(i, 1);
        console.log('After', cartItems);
        // now remove item form cart
        this.cartItems.next(cartItems);
        break;
      }
    }

  }
  removeAllItems() {
    this.cartItems.getValue().forEach(item => {
      this.inventory.updateInventory(item.itemName, -item.quantity);
    });
    this.cartItems.next([]);
  }

  updateQuantity(itemName: string, quantity: number) {
    // Update the quantityRemaining of the item in the inventory
    this.inventory.updateInventory(itemName, quantity);
  }

  confirmPurchase() {
    // We update the inventory every time we make any changes to the cart, so the quantityRemaining of each item is always updated.
    // Clearing the cart items will be enough here
    this.cartItems.next([]);
  }

}

/**
 * CartItem Calls
 */
export class CartItem implements ICartItem {
  itemName: string;
  imgSrc: string;
  price: number;
  quantityRemaining: number;
  _quantity: number;
  get quantity(): number {
    return this._quantity;
  }
  set quantity(quantity: number) {
    this._quantity = quantity;
    this.totalCost = Number.parseFloat((this.price * quantity).toFixed(2));
  }
  setQuantity: Function;
  totalCost: number;
  constructor(storeItem: IStoreItem) {
    this.itemName = storeItem.itemName ? storeItem.itemName : '';
    this.price = storeItem.price ? storeItem.price : 0;
    this.quantity = 1;
    this.totalCost = storeItem.price;
    this.quantityRemaining = storeItem.quantityRemaining ? storeItem.quantityRemaining : 0;
  }
}
