import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { OwnerComponent } from './owner/owner.component';
import { VetComponent } from './vet/vet.component';
import { VetFormComponent } from './vet/vet.form.component';
import { AboutComponent } from './about/about.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'owner',
    component: OwnerComponent
  },
  {
    path: 'vet',
    component: VetComponent,
    children: [
      { path: 'new',  component: VetFormComponent }
    ]
  },
  {
    path: 'about',
    component: AboutComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routedComponents = [HomeComponent, OwnerComponent, VetComponent, VetFormComponent, AboutComponent];
