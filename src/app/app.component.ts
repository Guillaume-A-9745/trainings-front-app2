import { Component } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'trainings-front-app2';

  constructor(public cartService : CartService) {
   }

}
