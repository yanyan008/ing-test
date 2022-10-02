import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from './../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AppService {
  constructor(private _httpClient: HttpClient) {}

  getShows(): Observable<object> {
    return this._httpClient.get(`${environment.apiUrl}shows`);
  }


  getShowDetails(id: number): Observable<object> {
    return this._httpClient.get(`${environment.apiUrl}shows/${id}`);
  }

  searchShow(search: string): Observable<object> {
    return this._httpClient.get(
      `${environment.apiUrl}search/shows?q=${search}`
    );
  }
}
