import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdvertsPageComponent } from './adverts-page/adverts-page.component';
import { AdvertRoutingModule } from './advert-routing.module';



@NgModule({
  declarations: [
    AdvertsPageComponent
  ],
  imports: [
    CommonModule,
    AdvertRoutingModule
  ]
})
export class AdvertModule { }
