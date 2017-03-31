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


  loadInventory() {
    console.log('Getting Store Items');
    this.http.get('/assets/store_items.json').map(response => {
      return response.json();
    }).subscribe(items => {
      this.storeItems.next(items);
    });
  }
  
  removeFromInventory(itemName: string, quantity: number) {
    this.updateInventory(itemName, -quantity);
  }
  addToInventory(itemName: string, quantity: number) {
    this.updateInventory(itemName, quantity);
  }
  updateInventory(itemName: string, quantity: number) {
    let items = this.storeItems.getValue();
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
