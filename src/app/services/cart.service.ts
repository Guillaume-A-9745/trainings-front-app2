import { Injectable } from '@angular/core';
import { Training } from '../model/training.model';
import { Customer } from "../model/customer.model";

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private cartItems: { [id: number]: { training: Training, quantity: number } } = {};
  customer: Customer;
  constructor() {
    this.customer = new Customer("", "", "", "", "");
  }
  

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

  /* Créer un client */
  setCustomer(customer: { name: string, firstName: string, address: string, phone: string, email: string }) {
    this.customer = customer;
    localStorage.setItem('customer', JSON.stringify(customer));
  }

  /* retourner un client */
  getCustomer(): { name: string, firstName: string, address: string, phone: string, email: string } {
    if (!this.customer) {
      const customer = localStorage.getItem('customer');
      if (customer) {
        this.customer = JSON.parse(customer);
      }
    }
    return this.customer;
  }

  /* Afficher le nombre darticles dans le panier */ 
  showNumberCartItems(){
    let totalQuantity = 0;
  for (const key in this.cartItems) {
    if (this.cartItems.hasOwnProperty(key)) {
      totalQuantity += this.cartItems[key].quantity;
    }
  }
  return totalQuantity;
  }
}

