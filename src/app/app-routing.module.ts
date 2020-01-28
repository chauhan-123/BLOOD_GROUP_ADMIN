import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CountryComponent } from './module/module/layout/country/country.component';
import { StateComponent } from './module/module/layout/state/state.component';
import { DistrictComponent } from './module/module/layout/district/district.component';
import { UserComponent } from './module/module/layout/user/user.component';


const routes: Routes = [
  {path:'', redirectTo:'blood-group', pathMatch:'full' },
  {path:'blood-group',loadChildren:'./module/module/layout/blood-group/blood-group.module#BloodGroupModule'},
  {path:'country-group/:result', component:CountryComponent},
  {path:'state-group' , component:StateComponent , data :{result: 'p1' }},
  {path: 'district-group' , component : DistrictComponent , data: {result:'p1'}},
  {path:'user-group' , component:UserComponent ,  data :{result:'p1'}}
];

@NgModule({
  imports: [RouterModule.forRoot(routes), 
],
  exports: [RouterModule]
})
export class AppRoutingModule { }
