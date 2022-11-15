import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { reg1 } from './reg1';

@Injectable({
  providedIn: 'root'
})
export class Data1Service {

  jsonUrl='http://localhost:3000/mail'
  constructor(private httpClient:HttpClient) { }

  storeData(reg1Data:reg1): Observable <reg1> {
    return this.httpClient.post<reg1>(this.jsonUrl,reg1Data)
  }

  fetchData(): Observable <reg1> {
    return this.httpClient.get<reg1>(this.jsonUrl)
  }

  getMaildata(id: any): Observable<any> {
    return this.httpClient.get<any>(this.jsonUrl + '/' + id);
  }

  updateMaildata(maildata: any): Observable<any> {
    return this.httpClient.put<any>('${this.jsonUrl}/${maildata.id}', maildata);
  }


}
