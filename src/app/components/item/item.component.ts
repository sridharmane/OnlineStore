import { Component, OnInit, Input } from '@angular/core';
import { ShoppingCartService } from '../../services';
import { IGalleryItem } from '../../types';
@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {

  @Input('item') item: IGalleryItem;
  constructor(private shoppingCart: ShoppingCartService) {

  }

  ngOnInit() {
    console.log('init of item:', this.item);
  }

  addToCart() {
    // TODO
    this.shoppingCart.addItem(this.item);
  }

}
