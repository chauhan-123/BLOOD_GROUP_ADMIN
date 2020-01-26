import { Component, OnInit } from '@angular/core';
import { LayoutService } from '../layout.service';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.scss']
})
export class CountryComponent implements OnInit {
  countryGroup: string;
  countries: string[] = ['Afghanistan', 'Barbados', 'Namibia' , 'Brazil', 'Cameroon' , 'Pakistan' , 
                       'Djibouti', 'Egypt' , 'South Africa' , 'Greece' ,'India' ];
  constructor( public layoutService:LayoutService) { }

  ngOnInit() {
    this.getCountryList();
  }

  getCountryList(){
    this.layoutService.getCountryList().subscribe(response=>{
      console.log("res", response);
    })

  }
  sendBloodGroup(event){
    console.log("blood group working" , event.target.value)
  }
}
