import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CountryComponent } from './module/module/layout/country/country.component';
import { BloodGroupComponent } from './module/module/layout/blood-group/blood-group.component';
import { StateComponent } from './module/module/layout/state/state.component';
import { CityComponent } from './module/module/layout/city/city.component';


const routes: Routes = [
  {path:'blood-group', component:BloodGroupComponent},
  {path:'country', component:CountryComponent},
  {path:'state' , component:StateComponent},
  {path: 'city' , component : CityComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes), 
],
  exports: [RouterModule]
})
export class AppRoutingModule { }
