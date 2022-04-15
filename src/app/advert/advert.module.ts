import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdvertsPageComponent } from './adverts-page/adverts-page.component';
import { AdvertRoutingModule } from './advert-routing.module';
import { CreateNewComponent } from './create-new/create-new.component';
import { MyAdvertsComponent } from './my-adverts/my-adverts.component';
import { AdvertDetailsComponent } from './advert-details/advert-details.component';
import { EditAdvertComponent } from './edit-advert/edit-advert.component';



@NgModule({
  declarations: [
    AdvertsPageComponent,
    CreateNewComponent,
    MyAdvertsComponent,
    AdvertDetailsComponent,
    EditAdvertComponent
  ],
  imports: [
    CommonModule,
    AdvertRoutingModule
  ]
})
export class AdvertModule { }
