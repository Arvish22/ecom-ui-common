import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InventoryComponent } from './inventory.component';
import { CategoryComponent } from './category/category.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    InventoryComponent,
    CategoryComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class InventoryModule { }
