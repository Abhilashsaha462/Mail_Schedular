import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { MatDialog } from '@angular/material/dialog';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { Data2Service } from '../data2.service';

@Component({
  selector: 'app-scheduleorsent',
  templateUrl: './scheduleorsent.component.html',
  styleUrls: ['./scheduleorsent.component.css']
})
export class ScheduleorsentComponent implements OnInit {

  emailData:FormGroup;
  
  constructor(private schedule:Data2Service) {
    this.emailData = new FormGroup({
      to: new FormControl(''),
      cc : new FormControl(''),
      bcc : new FormControl(''),
      subject : new FormControl(''),
      body : new FormControl(''),
      date : new FormControl(''),
      time : new FormControl(''),
    })
  }
  ngOnInit(): void {
    
  }

  saveData()
  {
    const logData = this.emailData.value;
    this.schedule.storeData(logData).subscribe(
      () => {
        alert("Email Scheduled Successfully");
      },error => {
        alert(error)
      }
      
    );
  }
 


}
