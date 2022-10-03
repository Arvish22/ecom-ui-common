import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderComponent } from './order.component';
import { CreateOrderComponent } from './create-order/create-order.component';



@NgModule({
  declarations: [
    OrderComponent,
    CreateOrderComponent
  ],
  imports: [
    CommonModule
  ]
})
export class OrderModule { }
