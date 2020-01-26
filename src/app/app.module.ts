import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SidebarComponent } from './module/module/layout/sidebar/sidebar.component';
import { HeaderComponent } from './module/module/layout/header/header.component';
import {MatIconModule , MatListModule ,MatTableModule , MatRadioModule} from '@angular/material';
import { BloodGroupComponent } from './module/module/layout/blood-group/blood-group.component';
import {FormsModule} from '@angular/forms';
import { CountryComponent } from './module/module/layout/country/country.component';
import { StateComponent } from './module/module/layout/state/state.component';
import { CityComponent } from './module/module/layout/city/city.component';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidebarComponent,
    BloodGroupComponent,
    CountryComponent,
    StateComponent,
    CityComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatListModule,
    MatRadioModule,
    MatTableModule,
    FormsModule,
    HttpClientModule
  
 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
