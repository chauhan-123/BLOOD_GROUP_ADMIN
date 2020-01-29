import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { LayoutService } from '../layout.service';

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.scss']
})
export class ConfirmationComponent implements OnInit {
  DialogData:any;
  userName: any;
  constructor(
    public dialogRef: MatDialogRef<ConfirmationComponent>,
    @Inject(MAT_DIALOG_DATA) public data:any , 
    public layoutService:LayoutService) {}

  ngOnInit() {
    if(this.data){
      console.log(this.data , "data");
      this.userName = this.data.userName;
    }
  }

  sendEmail(data){
    this.layoutService.sendEmail(data).subscribe();
  }
}
