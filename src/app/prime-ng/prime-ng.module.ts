import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ButtonModule} from 'primeng/button';
import {SpeedDialModule} from 'primeng/speeddial';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ButtonModule
  ],
  exports:[
    ButtonModule,
    SpeedDialModule
  ]
})
export class PrimeNgModule { }
