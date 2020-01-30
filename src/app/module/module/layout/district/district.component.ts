import { Component, OnInit } from '@angular/core';
import { LayoutService } from '../layout.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-district',
  templateUrl: './district.component.html',
  styleUrls: ['./district.component.scss']
})
export class DistrictComponent implements OnInit {
  districtDetails: any;
finalResult =[];
AllFinalData = [];
  result: any;
  state:any;
  country:any;
  blood:any;

  constructor(public layoutService:LayoutService , public route:ActivatedRoute ,
    public router: Router) { }

  ngOnInit() {
    this.result = this.route.params.subscribe(res=>{
      this.state = res.state;
      this.country = res.country;
      this.blood = res.blood;
    })
    this.getDistrictList();
  }

  getDistrictList(){
    this.layoutService.getDistrictDetails().subscribe(response =>{
      this.districtDetails = response['data'];
    })
  }

  sendDistrictData(event){
this.finalResult.push(event.target.innerText , this.state , this.country , this.blood);
  }

  sendFinalData(){
    this.AllFinalData.push(this.finalResult);
    console.log("=====>" , this.AllFinalData)
    if(this.AllFinalData[0][0] == "undefined" || this.AllFinalData[0][1] == "undefined" || 
    this.AllFinalData[0][2] == "undefined"  || this.AllFinalData[0][3] == "undefined"){
       alert("please enter the all data!")
        }
        else{
    this.router.navigate(['user-group', {district: this.AllFinalData[0][0] ,state:this.AllFinalData[0][1] , country:this.AllFinalData[0][2] , blood: this.AllFinalData[0][3]}]);
        }
  
}
}
