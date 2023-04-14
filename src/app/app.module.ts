import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TrainingsComponent } from './components/trainings/trainings.component';
import { FormsModule } from '@angular/forms';
import { CartComponent } from './components/cart/cart.component';
import { NotFoundComponentComponent } from './components/not-found-component/not-found-component.component';
import { FormsComponent } from './components/forms/forms.component';


@NgModule({
  declarations: [
    AppComponent,
    TrainingsComponent,
    CartComponent,
    NotFoundComponentComponent,
    FormsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
