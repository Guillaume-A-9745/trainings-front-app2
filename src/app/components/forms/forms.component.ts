import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CartService } from 'src/app/services/cart.service';
import { Customer } from "src/app/model/customer.model";

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent {
  customer: Customer;
  constructor(public cartService: CartService) { 
    this.customer = new Customer("", "", "", "", "");
  }

  onSaveCustomer(form: NgForm) {
    const customer = {
      name: form.value.name,
      firstName: form.value.firstName,
      address: form.value.address,
      phone: form.value.phone,
      email: form.value.email
    };
    this.cartService.setCustomer(customer);
  }
}

