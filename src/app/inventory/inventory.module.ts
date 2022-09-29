import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InventoryComponent } from './inventory.component';
import { CategoryComponent } from './category/category.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddItemComponent } from './item/add-item/add-item.component';
import { UnitComponent } from './common/unit/unit.component';
import { ListItemsComponent } from './item/list-items/list-items.component';
import { AddCategoryComponent } from './category/add-category/add-category.component';
import { AddUnitComponent } from './common/unit/add-unit/add-unit.component';



@NgModule({
  declarations: [
    InventoryComponent,
    CategoryComponent,
    AddItemComponent,
    UnitComponent,
    ListItemsComponent,
    AddCategoryComponent,
    AddUnitComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
  ]
})
export class InventoryModule { }
