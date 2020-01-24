

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blood-group',
  templateUrl: './blood-group.component.html',
  styleUrls: ['./blood-group.component.scss']
})
export class BloodGroupComponent  implements OnInit {
  bloodGroup: string;
  bloods: string[] = ['A+' , 'A-' , 'B+', 'B-', 'O+' , 'O-' , 'AB+' , 'AB-'  ];
  constructor() { 

  }

  ngOnInit() {
    console.log(this.bloodGroup , 'blood group')
  }

  sendBloodGroup(event){
    console.log("blood group working" , event.target.value)
  }
}
