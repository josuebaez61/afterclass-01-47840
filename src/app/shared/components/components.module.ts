import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BsCardComponent } from './bs-card/bs-card.component';



@NgModule({
  declarations: [
    BsCardComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [BsCardComponent]
})
export class ComponentsModule { }
