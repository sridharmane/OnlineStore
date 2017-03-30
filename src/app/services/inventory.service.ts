import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class InventoryService {

  storeItems: Observable<any>;

  constructor(private http: Http) {
    console.log('Getting Store Items');

    this.storeItems = this.http.get('/assets/store_items.json').map(response => {
      return response.json();
    });


  }

}
