import { Component, OnInit } from '@angular/core';
import { LayoutService } from '../layout.service';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute } from '@angular/router';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { ConfirmationComponent } from '../confirmation/confirmation.component';

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
  constructor(public layoutService:LayoutService , public route:ActivatedRoute, 
    public dialog: MatDialog) { }

  ngOnInit() {
    this.result = this.route.params.subscribe(res =>{
    this.allData = res;
    });
  
    this.getUserDetails()
  }

  getUserDetails(){     
    this.layoutService.getUserInformation(this.allData).subscribe( 
       (response: any) => {
      if (response) {
        this.getUserData = new MatTableDataSource(response.data);
      }
    })
  }

  // when user click the individual id and get the specified data
  getUser(){
  }

  openDialog(user?): void {
    const dialogRef = this.dialog.open(ConfirmationComponent, {
      width: '450px',
      height:'350px',
      data:user || '' 
    });

    dialogRef.afterClosed().subscribe(result => {

    });
  }
}
