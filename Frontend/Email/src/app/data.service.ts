import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { reg } from './reg';

@Injectable({
  providedIn: 'root'
})
export class DataService {
 

  isLoggedIn:boolean=false;
  // apiURL = 'http://localhost:3000/posts';
 
  constructor(private httpClient: HttpClient) { }

  storeData(regData: reg): Observable<reg>{ 
    return this.httpClient.post<reg>('http://localhost:3000/register',regData);
   // return this.httpClient.post<reg>(this.apiURL,regData);
  }
  checkData1(logData:any): Observable<reg> {
  // return   this.httpClient.get<reg>(this.apiURL);
 return this.httpClient.post<reg>('http://localhost:3000/authenticate',logData);
  }
}
