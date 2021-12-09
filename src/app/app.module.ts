import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PrimeNgModule } from './prime-ng/prime-ng.module';
import { IconAddComponent } from './icons/icon-add/icon-add.component';
import { MessageService } from 'primeng/api';

@NgModule({
  declarations: [
    AppComponent,
    IconAddComponent,
    IconAddComponent
  ],
  imports: [
    BrowserModule,
    PrimeNgModule
  ],
  providers: [MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
