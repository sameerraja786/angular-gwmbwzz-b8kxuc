import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AnyCatcher } from 'rxjs/internal/AnyCatcher';
@Injectable()
export class PostalserviceService {
  postalurl = 'https://api.postalpincode.in/pincode/';
  constructor(private http: HttpClient) {}
  getDataById(id: any) {
    return this.http.get(this.postalurl + id);
  }
}
