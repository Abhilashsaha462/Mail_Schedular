import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Data1Service } from '../data1.service';
import { ScheduleorsentComponent } from '../scheduleorsent/scheduleorsent.component';
import { SendMailBarComponent } from '../send-mail-bar/send-mail-bar.component';

@Component({
  selector: 'app-dialogbox',
  templateUrl: './dialogbox.component.html',
  styleUrls: ['./dialogbox.component.css']
})
export class DialogboxComponent implements OnInit {

  ngOnInit(): void {
   
    }
    onClear() {
      this.dialogData.reset();
  
    }
  

  dialogData: FormGroup
  constructor(public dialogRef: MatDialogRef<SendMailBarComponent>,private dialog:Data1Service,private httpClient:HttpClient,private route:Router, private dialog1: MatDialog) { 
    this.dialogData = new FormGroup({
      accountName : new FormControl(''),
      email : new FormControl(''),
      password : new FormControl(''),
      inServer : new FormControl(''),
      inServerPort : new FormControl(''),
      outServer : new FormControl(''),
      outServerPort : new FormControl('')
    })
    

  }
  
  saveData()
  {
    this.httpClient.post<any>(" http://localhost:3000/mail", this.dialogData.value).subscribe(res => {
      alert("Data Store succesfully")
      this.dialogData.reset();
      this.route.navigate(["/mailbar"]);
    },
      err => {
        alert("something went wrong")
      })
  }
 
  onClose() {
    
        this.dialogRef.close();
      }
    
  
}
