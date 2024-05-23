import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { environment } from "src/environments/environment";
import { RequestInputModel } from 'src/app/models/Requests/request-input-model';
import { RequestOutputModel } from "src/app/models/Requests/RequestOutputModel";
import { Person } from "src/app/models/Requests/Person";
import { REQUEST_API } from "src/app/@core/api/api-config/REQUEST_API";

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
      RequestID: 11206,
      DelegatedPersonName: 'محمد ابراهيم',
      Person: person
    } as RequestInputModel
    
    return request;
    
  }

  CreatePerson(): Person{
    let person = {
      NationalID: '28810122906039',
      NationalIDType: 19,//رقم قومي
      Address: 'ش.احمد عصمت-القاهره',
      NationalityID: 102,//جنسيه
      Email: 'M.alu@gmail.com',
      PhoneNumber: '01066359012',
      FirstName: 'محمد',
      SecondName: 'على',
      ReligionID: 1//الديانه
    } as Person;
    return person;
  }

  postData(){
    let body = this.CreateRequest();
    return this.http.post<RequestOutputModel>(`${environment.localBaseUrl}${REQUEST_API.create}`, body);
  }
}
