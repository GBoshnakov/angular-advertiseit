import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { AboutComponent } from './about/about.component';
import { StaticRoutingModule } from './static-routing.module';



@NgModule({
  declarations: [
    HomeComponent,
    NotFoundComponent,
    AboutComponent
  ],
  imports: [
    CommonModule,
    StaticRoutingModule
  ]
})
export class StaticModule { }
