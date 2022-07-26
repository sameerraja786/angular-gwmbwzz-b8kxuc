import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgifComponent } from './ngif/ngif.component'

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [NgifComponent],
  exports:[NgifComponent]
})
export class NgifModule { }