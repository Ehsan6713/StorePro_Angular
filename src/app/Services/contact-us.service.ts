import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {  ContactUsDto } from '../Dtos/contact-us.dto';
import { ApiAdress } from '../Utilities/api-address';

@Injectable({
  providedIn: 'root'
})
export class ContactUsService {

  constructor(private httpClient:HttpClient) { }
  create(model:ContactUsDto){
   return this.httpClient.post(ApiAdress.CreateContacUs,model);
  }
}
