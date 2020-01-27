

import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LayoutService } from '../layout.service';

@Component({
  selector: 'app-blood-group',
  templateUrl: './blood-group.component.html',
  styleUrls: ['./blood-group.component.scss']
})
export class BloodGroupComponent  implements OnInit {
  bloodGroupDetails:any;
  blood:any;
  constructor(public http:HttpClient , public layoutService:LayoutService) { 

  }

  ngOnInit() {
    this.bloodGroupList();
  }


  bloodGroupList(){
    this.layoutService.getBloodList().subscribe(
      response=>{
   
        this.bloodGroupDetails = response['data']
      }
    )
  }

  sendBloodGroup(event){
    console.log("blood group working" , event.target.value)
  }
}
