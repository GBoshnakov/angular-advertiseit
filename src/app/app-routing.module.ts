import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './static/home/home.component';
import { NotFoundComponent } from './static/not-found/not-found.component';

const routes: Routes = [
  {
      path: '',
      pathMatch: 'full',
      redirectTo: 'home'
  },
  {
      path: 'home',
      component: HomeComponent
  },
  {
      path: '**',
      component: NotFoundComponent
  }
]

export const AppRoutingModule = RouterModule.forRoot(routes);