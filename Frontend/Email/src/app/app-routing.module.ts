import { FullscreenOverlayContainer } from '@angular/cdk/overlay';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { AccountComponent } from './account/account.component';
import { DialogboxComponent } from './dialogbox/dialogbox.component';
import { LoginGuard } from './login.guard';
import { LoginComponent } from './login/login.component';
import { MailSchedularBarComponent } from './mail-schedular-bar/mail-schedular-bar.component';
import { RegisterComponent } from './register/register.component';
import { ScheduleorsentComponent } from './scheduleorsent/scheduleorsent.component';
import { SendMailBarComponent } from './send-mail-bar/send-mail-bar.component';
import { UpdateComponent } from './update/update.component';

const routes: Routes =  [
  {
    path:"",
    component:MailSchedularBarComponent,
    
    children:[
      {
        path:"",
        component:LoginComponent
      },
      {
          path:"login",
          component:LoginComponent
      },
      {
          path:"register",
          component:RegisterComponent
      }
    ]
  },
  {
    path:"mailbar",
    component:SendMailBarComponent,
    // canActivate: [LoginGuard]
    children:
    [
      {
        path:"edit-metrics/:id",
        component:UpdateComponent
      },
    //   // {
    //   //   path:"account",
    //   //   component:AccountComponent
    //   // }
    ]
  },
  // {
  //   path:"schedule",
  //   component: ScheduleorsentComponent
  // }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
