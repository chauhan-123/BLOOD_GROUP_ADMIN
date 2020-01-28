import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule , Routes } from '@angular/router';
import { BloodGroupComponent } from './blood-group.component';
import {MatIconModule , MatListModule ,MatTableModule , MatRadioModule, MatOptionModule, MatSelectModule} from '@angular/material';
import { FormsModule } from '@angular/forms';
const routes:Routes =[
  {path:'', component:BloodGroupComponent}
]

@NgModule({
  declarations: [BloodGroupComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatIconModule,
    MatListModule,
    MatRadioModule,
    MatTableModule,
    FormsModule,
    MatOptionModule,
    MatSelectModule
  ]
})
export class BloodGroupModule { }
