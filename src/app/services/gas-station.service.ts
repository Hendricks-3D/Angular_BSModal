import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class GasStationService {
  token = '';
  options = {
    headers: new HttpHeaders({
      'Access-Control-Allow-Origin': '*',
      'content-type': 'application/json',
    }),
  };
  constructor(private http: HttpClient) {}

  getAllGasStation(): Observable<any> {
    return this.http.get('https://reqres.in/api/users?page=2');
  }
}
