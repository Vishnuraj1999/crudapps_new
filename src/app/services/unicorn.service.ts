import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UnicornService {
  private apiUrl = 'https://crudcrud.com/api/815cd3f89dd741ebabd2104c3ac7f141/unicorns';

  constructor(private http: HttpClient) { }

  getUnicorns(): Observable<any> {
    return this.http.get(this.apiUrl);
  }

  addUnicorn(unicorn: any): Observable<any> {
    return this.http.post(this.apiUrl, unicorn);
  }

  deleteUnicorn(id: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
