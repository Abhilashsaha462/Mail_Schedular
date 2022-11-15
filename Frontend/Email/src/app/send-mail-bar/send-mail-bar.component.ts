import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { ScheduleorsentComponent } from '../scheduleorsent/scheduleorsent.component';
import { MatDialog } from '@angular/material/dialog';
import { DialogboxComponent } from '../dialogbox/dialogbox.component';
import { Data1Service } from '../data1.service';
import { Data2Service } from '../data2.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-send-mail-bar',
  templateUrl: './send-mail-bar.component.html',
  styleUrls: ['./send-mail-bar.component.css']
})
export class SendMailBarComponent {

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

    users:any;
    // details:any;
  constructor(private breakpointObserver: BreakpointObserver,public dialog: MatDialog,private user:Data1Service,private detail:Data2Service,private route:Router) {
    // this.user.fetchData().subscribe((x)=>{
    //   this.users=x;
    //   console.log(x);
    // })
    // this.detail.fetchData1().subscribe((data)=>{
    //   this.details=data;
    //   console.log(data);
    // })
  }
     get()
     {
      this.user.fetchData().subscribe((x)=>{
        this.users=x;
        console.log(x);
      })
     }

details:any;
     get1()
  {
    this.detail.fetchData1().subscribe((data)=>{
      this.details=data;
      console.log(data);
    })
  }

  

  onCreate1()
  {
    this.user.fetchData().subscribe((x)=>{
      this.users=x;
      console.log(x);
    })
  }

  openDialog() {
    const dialogRef = this.dialog.open(DialogboxComponent,{
      width:'50%'
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  
  }


}
