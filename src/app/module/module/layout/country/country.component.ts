import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.scss']
})
export class CountryComponent implements OnInit {
  countryGroup: string;
  countries: string[] = ['Afghanistan', 'Barbados', 'Namibia' , 'Brazil', 'Cameroon' , 'Pakistan' , 
                       'Djibouti', 'Egypt' , 'South Africa' , 'Greece' ,'India' ];
  constructor() { }

  ngOnInit() {
  }
  sendBloodGroup(event){
    console.log("blood group working" , event.target.value)
  }
}
