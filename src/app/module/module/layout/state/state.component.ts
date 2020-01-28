import { Component, OnInit } from '@angular/core';
import { LayoutService } from '../layout.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-state',
  templateUrl: './state.component.html',
  styleUrls: ['./state.component.scss']
})
export class StateComponent implements OnInit {
  countryGroup: string;
  stateGroupList: any;
finalResult =[];
  result: any;
  country:any;
  blood:any;
  constructor(public layoutService:LayoutService , public router:Router,
    public route:ActivatedRoute) { }

  ngOnInit() {
    this.result = this.route.params.subscribe(res =>{
      this.country = res.p1;
      this.blood = res.p2;
    });
    this.getStateList();
  }

  getStateList(){
   this.layoutService.getStateList().subscribe(Response=>{
     this.stateGroupList = Response['data']
   })
  }
  
  sendStateData(event){
    this.finalResult.push(event.target.innerText , this.country, this.blood);
    this.router.navigate(['district-group' , {state:this.finalResult[0] , country: this.finalResult[1] , blood: this.finalResult[2]}]);
  }
}
