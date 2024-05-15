import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { environment } from "src/environments/environment";
import { Person, RequestInputModel, RequestOutputModel } from 'src/app/models/Requests/request-input-model';
import { REQUEST_API } from "src/app/@core/api/api-config/realestate-api";

@Injectable({
  providedIn: 'root'
})
export class RequestService {
requestModel! : RequestInputModel; 
Person! : Person; 

  constructor(private http: HttpClient) { }

  CreateRequest():RequestInputModel{
    let person = this.CreatePerson();
    let request = {
      DelegateType: 7,
      RequestID: 0,
      DelegatedPersonName: 'محمد ابراهيم',
      Person: person
    } as RequestInputModel
    
    return request;
    
  }

  CreatePerson(): Person{
    let person = {
      NationalID: '29010122606055',
      NationalIDType: 19,//رقم قومي
      Address: 'ش.احمد عصمت-القاهره',
      NationalityID: 102,//جنسيه
      Email: 'M.Ibo@gmail.com',
      PhoneNumber: '01066359012',
      FirstName: 'محمد',
      SecondName: 'ابراهيم',
      ReligionID: 1//الديانه
    } as Person;
    return person;
  }

  postData(){
    let body = this.CreateRequest();
    return this.http.post<RequestOutputModel>(`${environment.localBaseUrl}${REQUEST_API.create}`, body);
  }
}
