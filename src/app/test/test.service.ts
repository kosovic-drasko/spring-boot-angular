import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class TestService {

  protected  url='http://localhost:8080/test';
  constructor(protected http: HttpClient) { }

  getStudent(){
    this.http.get(this.url);
  }

}
