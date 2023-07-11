import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(
    public http: HttpClient,
  ) {

  }

  //link API
  apiURL() {
    return "http://localhost:1231";
  }

  getUser() {
    return this.http.get(this.apiURL() + '/user');
  }
  getBuku() {
    return this.http.get(this.apiURL() + '/buku');
  }
}
