import { Component, OnInit } from '@angular/core';
import { Training } from 'src/app/model/training.model';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit{
  cartItems: { training: Training, quantity: number }[] = [];
  totalPrice: number = 0;

  constructor(private cartService : CartService) { }

  ngOnInit() : void {
    this.loadCartItems();
  }

  loadCartItems() {
    this.cartItems = Object.values(this.cartService.getCartItems());
    this.totalPrice = this.cartService.updateTotal();
  }
  updateQuantity(training: Training, quantity: number) {
    this.cartService.updateQuantity(training,quantity);
    this.totalPrice = this.cartService.updateTotal();
  }
  removeTraining(training: Training){
    this.cartService.removeTraining(training);
    this.totalPrice = this.cartService.updateTotal();
    this.loadCartItems();
  }
  clearCart() {
    this.cartService.clearCart();
    this.totalPrice = this.cartService.updateTotal();
    this.loadCartItems();
  }
}
