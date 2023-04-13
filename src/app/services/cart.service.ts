import { Injectable } from '@angular/core';
import { Training } from '../model/training.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private cartItems: { [id: number]: { training: Training, quantity: number } } = {};

  constructor() {}
  

  /* Ajoute un article au panier */
  addTraining(training: Training) {
    const id = training.id;
    if (this.cartItems[id]) {
      this.cartItems[id].quantity += training.quantity;
    } else {
      this.cartItems[id] = { training, quantity: training.quantity };
    }
    this.saveCart();
  }

  /* Récupère tous les articles du panier */
  getCartItems(): { training: Training, quantity: number }[] {
    return Object.values(this.cartItems);
  }

  /* Met à jour la quantité d'un article dans le panier */
  updateQuantity(training: Training, quantity: number) {
    const id = training.id;
    if (quantity === 0) {
      delete this.cartItems[id];
    } else {
      this.cartItems[id].quantity = quantity;
    }
    this.saveCart();
  }

  /* Supprime un article du panier */
  removeTraining(training: Training) {
    const id = training.id;
    delete this.cartItems[id];
    this.saveCart();
  }

  /* Sauvegarde les articles du panier dans le localStorage*/
  private saveCart() {
    localStorage.setItem('cartItems', JSON.stringify(this.cartItems));
  }

  /* Charge les articles du panier depuis le localStorage */
  loadCart() {
    const cartItems = localStorage.getItem('cartItems');
    if (cartItems) {
      this.cartItems = JSON.parse(cartItems);
    }
  }

  /* Efface tous les articles du panier */
  clearCart() {
    this.cartItems = {};
    this.saveCart();
  }

  /* Mettre à jour le total du panier */
  updateTotal() {
    let total : number = 0;
    for (let id in this.cartItems) {
      total += this.cartItems[id].training.price * this.cartItems[id].quantity;
    }
    return total;
  }
}

