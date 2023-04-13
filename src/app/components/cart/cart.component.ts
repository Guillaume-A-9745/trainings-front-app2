import { Component, OnInit } from '@angular/core';
import { Training } from 'src/app/model/training.model';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit{
  cartItems: { [id: number]: { training: Training, quantity: number } } | undefined = {};
  constructor(private cartService : CartService) { }

  ngOnInit() : void {
    this.cartItems = this.cartService.getCartItems();
  }

}
