import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import { BodyComponent } from './body/body.component';
import { MenuComponent } from './body/menu/menu.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatGridListModule } from '@angular/material/grid-list';
import { MainComponent } from './body/main/main.component';
import { Trip1Component } from './body/trip1/trip1.component';
import { ContactComponent } from './body/contact/contact.component';
import { Trip1aComponent } from './body/trip1a/trip1a.component';
import { Trip1bComponent } from './body/trip1b/trip1b.component';
import { Trip1cComponent } from './body/trip1c/trip1c.component';
import { Trip1dComponent } from './body/trip1d/trip1d.component';
import { Trip1eComponent } from './body/trip1e/trip1e.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BodyComponent,
    MenuComponent,
    MainComponent,
    Trip1Component,
    ContactComponent,
    Trip1aComponent,
    Trip1bComponent,
    Trip1cComponent,
    Trip1dComponent,
    Trip1eComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatListModule,
    MatGridListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
