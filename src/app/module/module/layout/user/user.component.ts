import { Component, OnInit } from '@angular/core';
import { LayoutService } from '../layout.service';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  result:any;
  allData:any;
  displayedColumns: string[] = [ 'userName', 'gender', 'email' , 'phoneNumber' , 'bloodGroupName'];
  getUserData = new MatTableDataSource<any>([]);
  constructor(public layoutService:LayoutService , public route:ActivatedRoute) { }

  ngOnInit() {
    this.result = this.route.params.subscribe(res =>{
    this.allData = res;
    });
  
    this.getUserDetails()
  }

  getUserDetails(){     
    console.log(this.allData , "AllData");

    this.layoutService.getUserInformation(this.allData).subscribe( 
       (response: any) => {
      if (response) {
        this.getUserData = new MatTableDataSource(response.data);
      }
    })
  }
}
