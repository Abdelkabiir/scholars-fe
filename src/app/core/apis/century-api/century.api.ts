import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CenturyApi {
  private apiUrl: string = environment.apiBaseUrl;
  constructor(private http: HttpClient) { }

  getCenturies(): Observable<any> {
    let headers: HttpHeaders = new HttpHeaders();
    headers = headers.append('Accept', 'application/json');
    return this.http.get(this.apiUrl + 'century/centuries',
       {headers}
      ).pipe(
           map((data) => {
             return data;
           }), catchError( error => {
             return throwError( 'Century not found!' + error);
           })
        );
    }
}
