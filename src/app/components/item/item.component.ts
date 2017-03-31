import { Component, OnInit, Input } from '@angular/core';
import { ShoppingCartService } from '../../services';
import { IStoreItem } from '../../types';
@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {

  @Input('item') item: IStoreItem;
  constructor(private shoppingCart: ShoppingCartService) {

  }

  ngOnInit() {}

  /**
   * Add current item to the shopping cart
   */
  addToCart() {
    this.shoppingCart.addItem(this.item);
  }

}
