import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { sc } from './schedule';

@Injectable({
  providedIn: 'root'
})
export class Data2Service {

  jsonUrl='http://localhost:3000/schedule'
  constructor(private httpClient:HttpClient) { }

  storeData(logData:sc): Observable <sc> {
    return this.httpClient.post<sc>(this.jsonUrl,logData)
  }

  fetchData1(): Observable <sc> {
    return this.httpClient.get<sc>(this.jsonUrl)
  }

}
