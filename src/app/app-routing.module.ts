import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TrainingsComponent } from './components/trainings/trainings.component';
import { CartComponent } from './components/cart/cart.component';
import { FormsComponent } from './components/forms/forms.component';
import { NotFoundComponentComponent } from './components/not-found-component/not-found-component.component';


const routes: Routes = [
  {path : 'trainings',component : TrainingsComponent},
  {path : 'cart',component : CartComponent},
  {path : 'form',component : FormsComponent},
  {path : '',redirectTo : 'trainings', pathMatch : 'full'},
  {path : '404',component : NotFoundComponentComponent},
  {path : '**', redirectTo : '/404'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
