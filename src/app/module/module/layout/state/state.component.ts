import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-state',
  templateUrl: './state.component.html',
  styleUrls: ['./state.component.scss']
})
export class StateComponent implements OnInit {
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
