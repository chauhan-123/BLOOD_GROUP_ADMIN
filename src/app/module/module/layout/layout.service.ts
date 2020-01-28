import { Injectable } from '@angular/core';
import {environment} from '../../../../environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LayoutService {
   Url = environment.baseUrl
  constructor(public http:HttpClient) { }


  getBloodList(){
    return this.http.get(`${this.Url}blood_Group`);
  }

  getCountryList(){
    return this.http.get(`${this.Url}country_Group`);
  }

  getStateList(){
    return this.http.get(`${this.Url}state_Group`);
  }

  getDistrictDetails(){
    return this.http.get(`${this.Url}district_Group`);
  }

  getUserInformation(info){
    console.log(info)
    return this.http.post(`${this.Url}user_group` , info);
  }
}
