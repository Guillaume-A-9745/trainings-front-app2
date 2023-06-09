import { Component, OnInit } from '@angular/core';
import { Training } from 'src/app/model/training.model'
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-trainings',
  templateUrl: './trainings.component.html',
  styleUrls: ['./trainings.component.css']
})
export class TrainingsComponent implements OnInit {
  listTrainings : Training[] | undefined;
  constructor(private cartService : CartService) { }

  ngOnInit() : void {
    this.cartService.loadCart();
    this.listTrainings = [
      { id:1, name:'Java', description:'Formation Java SE 8 sur 5 jours', price:1500, quantity:1 },
      { id:2, name:'Java Avancée', description:'Formation Java Avancée sur 5 jours', price:1500, quantity:1 },
      { id:3, name:'DotNet', description:'Formation DotNet sur 3 jours', price:1000, quantity:1 },
      { id:4, name:'Python', description:'Formation Python/Django sur 5 jours', price:1500, quantity:1 },
      { id:5, name:'Spring', description:'Spring Core/Mvc/Security sur 5 jours', price:1799, quantity:1 },
      { id:6, name:'Php frameworks', description:'Formation Symphony sur 5 jours', price:1200, quantity:1 },
      { id:7, name:'VPN et Firewall', description:'Proteger vos reseaux des tentatives d intrusion sur 5 jours', price:1500, quantity:1 },
      { id:8, name:'Google analytics', description:'collecter et analyser les donniees utilisateurs sur 5 jours', price:3500, quantity:1 }
    ]
  }

  onAddToCart(training : Training) {
    this.cartService.addTraining(training);
  }
}
