import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './body/main/main.component';
import { Trip1Component } from './body/trip1/trip1.component';
import { ContactComponent } from './body/contact/contact.component';
import { Trip1aComponent } from './body/trip1a/trip1a.component';
import { Trip1bComponent } from './body/trip1b/trip1b.component';
import { Trip1cComponent } from './body/trip1c/trip1c.component';
import { Trip1dComponent } from './body/trip1d/trip1d.component';
import { Trip1eComponent } from './body/trip1e/trip1e.component';

const routes: Routes = [
  {
    path: "", redirectTo: '/main', pathMatch: 'full'
  },
  {
    path: 'main',
    component: MainComponent
  },
  {
    path: 'trip1',
    component: Trip1Component
  },
  {
    path: 'trip1a',
    component: Trip1aComponent
  },
  {
    path: 'trip1b',
    component: Trip1bComponent
  },
  {
    path: 'trip1c',
    component: Trip1cComponent
  },
  {
    path: 'trip1d',
    component: Trip1dComponent
  },
  {
    path: 'trip1e',
    component: Trip1eComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
