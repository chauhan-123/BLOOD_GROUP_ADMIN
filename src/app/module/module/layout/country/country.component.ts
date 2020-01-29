import { Component, OnInit } from '@angular/core';
import { LayoutService } from '../layout.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.scss']
})
export class CountryComponent implements OnInit {
  countryGroup: string;
  countryGroupList: any;
  finalResult = [];
  result: any;
  blood:any;
  constructor( public layoutService:LayoutService, public router:Router , 
    public route:ActivatedRoute) { }

  ngOnInit() {
    this.result = this.route.params.subscribe(res=>{
      this.blood = res.blood;
    })
    this.getCountryList();
  }

  getCountryList(){
    this.layoutService.getCountryList().subscribe(response=>{
       this.countryGroupList = response['data'];
    })

  }
  sendCountryData(event){
    this.finalResult.push(event.target.innerText , this.blood);
    this.router.navigate(['state-group', {p1:this.finalResult[0] , p2:this.finalResult[1]}]);
  }
}
