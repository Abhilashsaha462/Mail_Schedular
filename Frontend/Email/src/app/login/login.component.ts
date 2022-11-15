import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  Login:FormGroup
  
  constructor(private auth:DataService,private route:Router) { 
    this.Login=new FormGroup({email:new FormControl('',[Validators.required,customValid1]),
  password:new FormControl('',[Validators.required,Validators.minLength(5),Validators.maxLength(10)])
})
  }
//  data1:any;
 submit()
  {   
    
        // this.auth.checkData1().subscribe((detail)=>{
        //   this.data1=detail;
        //   this.data1.filter((y: { email: string | null | undefined; password: string | null | undefined; }) =>
        //   (y.email==this.Login.value.email && y.password==this.Login.value.password)).map((x: any)=>{
        //     this.route.navigate(["/mailbar"]);
        //     return alert("login success");
        // },(error: any) => {
        //   alert(error);
        //   alert("email or password invalid");
        //   this.route.navigate(["/register"]);
        // });

        // ()=>{
        //   this.route.navigate(["/register"]);
        //   return alert("invalid email or password");
        //   }

          
        // })

        this.auth.checkData1(this.Login.value).subscribe(
          ()=>{
          alert("Login Successful");
          this.route.navigate(["/mailbar"])
      },
          ()=>{
            alert("Email or Password invalid");
            this.route.navigate(["/register"]);
          })
  }
 
  // register()
  // {
  //   this.route.navigate(["/register"]);
  //   alert("invalid email or password");

  // }

  //  submit()
  //  {
  //   this.auth.isLoggedIn=true;
  //    this.route.navigate(["register"]);
 
  //  }
  // sub()
  // {
  //   this.route.navigate(["/mailbar"]);
  // }
  

  ngOnInit(): void {
  }

 
}
export function customValid1(control:AbstractControl)
{
  if(control.value&&control.value.match("^[a-zA-Z0-9.!#$%&'+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)$"))
  {
    return null;
  }
  else{
    return { myError1:false}
  }
}
