import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdvertsPageComponent } from './adverts-page/adverts-page.component';
import { AdvertRoutingModule } from './advert-routing.module';
import { CreateNewComponent } from './create-new/create-new.component';
import { MyAdvertsComponent } from './my-adverts/my-adverts.component';
import { AdvertDetailsComponent } from './advert-details/advert-details.component';



@NgModule({
  declarations: [
    AdvertsPageComponent,
    CreateNewComponent,
    MyAdvertsComponent,
    AdvertDetailsComponent
  ],
  imports: [
    CommonModule,
    AdvertRoutingModule
  ]
})
export class AdvertModule { }
