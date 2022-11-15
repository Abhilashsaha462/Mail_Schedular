import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Data1Service } from '../data1.service';
import { SendMailBarComponent } from '../send-mail-bar/send-mail-bar.component';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

  updateData:FormGroup
  id: any;
  accountName: any;
  email: any;
  password: any;
  inServer: any;
  inServerPort: any;
  outServer: any;
  outServerPort: any;
  mailData$: Observable<any> = new Observable<any>();

  constructor(public dialogRef: MatDialogRef<SendMailBarComponent>
    , private httpClient: HttpClient
    , private route: Router, private mail: Data1Service,
    private activatedRoute: ActivatedRoute, private dialog: MatDialog) {
    this.updateData = new FormGroup({
      accountName : new FormControl(''),
      email : new FormControl(''),
      password : new FormControl(''),
      inServer : new FormControl(''),
      inServerPort : new FormControl(''),
      outServer : new FormControl(''),
      outServerPort : new FormControl(''),
      id: new FormControl('', [])
   })
 }
 
 ngOnInit(): void {
  this.activatedRoute.paramMap.subscribe(params => {
    let id = params.get('id') ?? 0;
    this.mail.getMaildata(+id).subscribe(data => {
      this.updateData.setValue(data);

    })
  })
  }

  onClear() {
    this.updateData.reset();
  }

  url = 'http://localhost:3000/mail';
  onSubmit() {
    const mailData = this.updateData.value;
    const endPoints = this.updateData.value.id
    this.httpClient.put(this.url + endPoints, mailData).subscribe(data => {
      console.log(data)
      this.updateData.reset();
      this.route.navigate(["/mailbar"]);

    }
    )
  }
  onClose() {
     this.dialogRef.close();
  }


}
