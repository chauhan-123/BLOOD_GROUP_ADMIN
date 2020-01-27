import { Component, OnInit } from '@angular/core';
import { LayoutService } from '../layout.service';

@Component({
  selector: 'app-state',
  templateUrl: './state.component.html',
  styleUrls: ['./state.component.scss']
})
export class StateComponent implements OnInit {
  countryGroup: string;
  stateGroupList: any;

  constructor(public layoutService:LayoutService) { }

  ngOnInit() {
    this.getStateList();
  }

  getStateList(){
   this.layoutService.getStateList().subscribe(Response=>{
     this.stateGroupList = Response['data']
   })
  }
  sendBloodGroup(event){
    console.log("blood group working" , event.target.value)
  }
}
