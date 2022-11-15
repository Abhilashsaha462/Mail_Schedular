import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../data.service';
import { AbstractControl } from "@angular/forms";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  regForm: FormGroup;

  constructor(private data:DataService,private route:Router) { 
    this.regForm = new FormGroup({
    email: new FormControl('', [Validators.required,Validators.minLength(10),Validators.maxLength(25)]),
    password: new FormControl('', [Validators.required,Validators.minLength(5),Validators.maxLength(10)]),
    confirmpassword: new FormControl('', [Validators.required,Validators.minLength(5),Validators.maxLength(10)])
    }
    );
  }

  saveData1()
{
  const regData = this.regForm.value;
  this.data.storeData(regData).subscribe(() => {
   alert("successfully registered");
   this.route.navigate(["/login"]);
  },error => {
    alert(error)
  });

}
// sub1()
// {
//   this.data.isAuthenticated=true;
//   this.route.navigate(["login"]);
// }



  ngOnInit(): void {
  }

}


