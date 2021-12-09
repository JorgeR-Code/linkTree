import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ButtonModule} from 'primeng/button';
import {SpeedDialModule} from 'primeng/speeddial';



@NgModule({
  declarations: [],
   exports:[
    ButtonModule,
    SpeedDialModule
  ]
})
export class PrimeNgModule { }
