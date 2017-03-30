import { Injectable } from '@angular/core';
import { ICartItem, IGalleryItem } from '../types';
import { Subject } from 'rxjs/Subject';
@Injectable()
export class ShoppingCartService {
  cartItemsSubject = new Subject<ICartItem[]>();
  cartItems: ICartItem[] = [];
  constructor() { }

  addItem(item: IGalleryItem) {
    // First check if item is already in cart
    console.log('Adding item to Cart', item);
    let alreadyInCart = false;
    for (let i = 0; i < this.cartItems.length; i++) {
      const cartItem = this.cartItems[i];
      if (cartItem.itemName === item.itemName) {
        if (cartItem.quantity) {
          cartItem.quantity++;
        } else {
          cartItem.quantity = 1;
        }
        this.cartItems[i] = cartItem;
        alreadyInCart = true;
        break;
      }
    }
    if (!alreadyInCart) {
      const newItem: ICartItem = {
        itemName: item.itemName,
        imgSrc: item.imgSrc,
        quantity: 1,
        price: item.price,
        totalCost: item.price
      };

      this.cartItems.push(newItem);
    }
    this.cartItemsSubject.next(this.cartItems);
  }



}
