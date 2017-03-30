import { Component, OnInit } from '@angular/core';
import { ShoppingCartService } from '../../services';
@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss']
})
export class ShoppingCartComponent implements OnInit {
  cartItems = this.cartService.cartItemsSubject;

  constructor(private cartService: ShoppingCartService) { 
    this.cartItems.subscribe(items=>{
      console.log('Cart Items',items);
    });
  }

  ngOnInit() {
    
  }

}
