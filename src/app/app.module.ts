import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SidebarComponent } from './module/module/layout/sidebar/sidebar.component';
import { HeaderComponent } from './module/module/layout/header/header.component';
import {MatIconModule , MatListModule , MatRadioModule, MatButtonModule, MatDialogModule} from '@angular/material';
import {FormsModule} from '@angular/forms';
import { CountryComponent } from './module/module/layout/country/country.component';
import { StateComponent } from './module/module/layout/state/state.component';
import { HttpClientModule } from '@angular/common/http';
import {MatSelectModule} from '@angular/material/select';
import { DistrictComponent } from './module/module/layout/district/district.component';
import { UserComponent } from './module/module/layout/user/user.component';
import { BloodGroupModule } from './module/module/layout/blood-group/blood-group.module';
import {MatTableModule} from '@angular/material/table';
import { ConfirmationComponent } from './module/module/layout/confirmation/confirmation.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidebarComponent,
    CountryComponent,
    StateComponent,
    DistrictComponent,
    UserComponent,
    ConfirmationComponent,
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
    HttpClientModule,
    MatSelectModule,
    BloodGroupModule,
    MatButtonModule,
    MatDialogModule
  
 
  ],
  providers: [ConfirmationComponent],
  bootstrap: [AppComponent],
  entryComponents:[ConfirmationComponent],
  
})
export class AppModule { }
