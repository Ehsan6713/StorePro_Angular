import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginDto } from '../Dtos/login.dto';
import { ApiAdress } from '../Utilities/api-address';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AccountService {
accessToken:BehaviorSubject<string>=new BehaviorSubject<string>("");
isLogin:boolean=localStorage.getItem('accessToken')!=='' && localStorage.getItem('accessToken')!=undefined ;
  constructor(private httpClient: HttpClient) { }

  login(model: LoginDto) {
    return this.httpClient.post(ApiAdress.login, model);
  }

  register() {

  }
}
