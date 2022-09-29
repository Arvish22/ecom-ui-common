import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CollapseSideNavComponent } from './collapse-side-nav/collapse-side-nav.component';



@NgModule({
  declarations: [
    CollapseSideNavComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CollapseSideNavComponent
  ]
})
export class UiComponentModule { }
