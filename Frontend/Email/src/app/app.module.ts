import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MailSchedularBarComponent } from './mail-schedular-bar/mail-schedular-bar.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SendMailBarComponent } from './send-mail-bar/send-mail-bar.component';
import { DialogboxComponent } from './dialogbox/dialogbox.component';
import { ScheduleorsentComponent } from './scheduleorsent/scheduleorsent.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatCardModule } from '@angular/material/card';
import { MatTabsModule } from '@angular/material/tabs';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatSelectModule } from '@angular/material/select';
import { MailListComponent } from './mail-list/mail-list.component';
import { UpdateComponent } from './update/update.component';
import { MatGridListModule } from '@angular/material/grid-list';
// import { AccountComponent } from './account/account.component';
// import { AccountComponent } from './account/account.component';

@NgModule({
  declarations: [
    AppComponent,
    MailSchedularBarComponent,
    LoginComponent,
    RegisterComponent,
    SendMailBarComponent,
    DialogboxComponent,
    ScheduleorsentComponent,
    MailListComponent,
    UpdateComponent,
    // AccountComponent,
    // AccountComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatDialogModule,
    MatCardModule,
    MatTabsModule,
    MatDatepickerModule,
    MatSelectModule,
    MatGridListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
