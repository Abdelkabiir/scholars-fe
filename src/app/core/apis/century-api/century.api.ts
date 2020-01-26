import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CenturyApi {

  constructor(private http: HttpClient) { }

  getCenturies(): Observable<any> {
    let headers: HttpHeaders = new HttpHeaders();
    headers = headers.append('Accept', 'application/json');
    // headers = headers.append(
    //   'X-RapidAPI-Key',
    //   '1108554cc1mshf11c17c4fea2b3dp179054jsn2446fb7a8965'
    // );
    return this.http.get(
      'http://localhost:3000/century/centuries',
       {headers}
      ).pipe(
           map((data) => {
             return data;
           }), catchError( error => {
             return throwError( 'Century not found!' );
           })
        );
    }
}
