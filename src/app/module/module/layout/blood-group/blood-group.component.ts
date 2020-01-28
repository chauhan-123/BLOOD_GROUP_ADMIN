

import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LayoutService } from '../layout.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-blood-group',
  templateUrl: './blood-group.component.html',
  styleUrls: ['./blood-group.component.scss']
})
export class BloodGroupComponent implements OnInit {
  bloodGroupDetails: any;
  blood: any;
  bloodGroupValue: any;
  finalResult =[];
  constructor(public http: HttpClient, public layoutService: LayoutService,
    public router:Router) {

  }

  ngOnInit() {
    this.bloodGroupList();
  }


  bloodGroupList() {
    this.layoutService.getBloodList().subscribe(
      response => {
        this.bloodGroupDetails = response['data'];
      }
    )
  }

  sendBloodGroup(event) {
    this.finalResult.push(event.target.value);
    this.router.navigate(['country-group' ,event.target.value]);
  }
}
