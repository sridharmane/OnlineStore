import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { IStoreItem, ICartItem } from '../types';

@Injectable()
export class InventoryService {

  // We are using behavior subject because we frequently need to get the current value of the store_items

  storeItems = new BehaviorSubject<IStoreItem[]>([]); // settign initial value of store items = []

  constructor(private http: Http) {
    this.loadInventory();
  }

  /**
   * Loads the items into the inventory. Currently loads from .json file, can be changed to any datastore
   */
  loadInventory() {
    console.log('Getting Store Items');
    this.http.get('/assets/store_items.json').map(response => {
      return response.json();
    }).subscribe(items => {
      this.storeItems.next(items);
    });
  }

  /**
   * Remove item from inventory and update the quantity available
   * @param itemName
   * @param quantity
   */
  removeFromInventory(itemName: string, quantity: number) {
    this.updateInventory(itemName, -quantity);
  }

  /**
   * Add item from inventory and update the quantity available
   * @param itemName
   * @param quantity
   */
  addToInventory(itemName: string, quantity: number) {
    this.updateInventory(itemName, quantity);
  }

  /**
   * Updates inventory with the quantity available
   * @param itemName
   * @param quantity
   */
  updateInventory(itemName: string, quantity: number) {
    const items = this.storeItems.getValue();
    for (let i = 0; i < items.length; i++) {
      if (itemName === items[i].itemName) {
        // console.log(`Updaing qunatity from ${items[i].quantityRemaining} with ${quantity}`);
        items[i].quantityRemaining -= quantity;
        break;
      }
    }
    this.storeItems.next(items);
  }

}
