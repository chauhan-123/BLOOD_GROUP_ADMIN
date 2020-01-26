

import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LayoutService } from '../layout.service';

@Component({
  selector: 'app-blood-group',
  templateUrl: './blood-group.component.html',
  styleUrls: ['./blood-group.component.scss']
})
export class BloodGroupComponent  implements OnInit {
  bloodGroup: string;
  bloods: string[] = ['A+' , 'A-' , 'B+', 'B-', 'O+' , 'O-' , 'AB+' , 'AB-'  ];
  constructor(public http:HttpClient , public layoutService:LayoutService) { 

  }

  ngOnInit() {
    this.bloodGroupList();
    console.log(this.bloodGroup , 'blood group')
  }


  bloodGroupList(){
    this.layoutService.getBloodList().subscribe(
      response=>{
        console.log(response , "response")
      }
    )
    console.log("Hello working")
  }

  sendBloodGroup(event){
    console.log("blood group working" , event.target.value)
  }
}
