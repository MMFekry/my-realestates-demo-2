import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Person } from 'src/app/models/Requests/Person';
import { TransactionParty } from 'src/app/models/Transactions/TransactionParty';
import { TransactionInputModel } from 'src/app/models/Transactions/transaction-input-model';
import { environment } from "src/environments/environment";
import { RequestOutputModel } from "src/app/models/Requests/RequestOutputModel";
import { TRANS_API } from "src/app/@core/api/api-config/TRANS_API";
import { RequestService } from '../requests/request.service';

@Injectable({
  providedIn: 'root'
})
export class TransactionService {

  constructor(private http: HttpClient, private reqService: RequestService) { }

  CreateTransaction(price: number, RequestID: number, Requests_RequestsID: number): TransactionInputModel{
  let transaction = {
    TransactionType: 1,
    ContractType: 7,
    Court: 0,
    ClaimNo: 0,
    TransactionDate: new Date(),
    Price: price,
    JudgmentFees: 0,
    StayPeriod: 0,
    RequestID: RequestID,
    Requests_RequestsID: Requests_RequestsID,
    Parties: this.CreateParties()
  } as TransactionInputModel;
  return transaction;
  }

  CreateParties(): TransactionParty[]{
    let parties = [{
      FirstName: 'محمد',
      SecondName: 'ابراهيم',
      NationalID: '29010122606055',
      DelegateID: 7,
      ThirdName: 'حجازي',
      FourthName: 'مصطفى',
      NationalIDType: 19,
      BirthDate: new Date(),
      //PassDate: Date,
      NationalityID: 102,
      PartyTypeID: 26,//for
      PhoneNumber: '01022523665',
      ReligionID: 1,
      Address: 'شارع عثمان ابوببن الدقي الجيزة',
      MeterValue: 100,
      PricePerParty: 500000,
      PersonsData: this.CreatePerson()
    },
    {
      FirstName: 'محمد',
      SecondName: 'علي',
      NationalID: '28810122906039',
      DelegateID: 7,
      ThirdName: 'حجازي',
      FourthName: 'مصطفى',
      NationalIDType: 19,
      BirthDate: new Date(),
      //PassDate: Date,
      NationalityID: 102,
      PartyTypeID: 25,//بائع
      PhoneNumber: '01022523665',
      ReligionID: 1,
      Address: 'ش.احمد عصمت-القاهره',
      MeterValue: 100,
      PricePerParty: 500000,
      PersonsData: this.reqService.CreatePerson()
    }] as TransactionParty[]
    return parties;
  }

  CreatePerson(): Person{
    let person = {
      NationalID: '29010122606055',
      NationalIDType: 19,//رقم قومي
      Address: 'شارع عثمان ابولبن الدقي الجيزة',
      NationalityID: 102,//جنسيه
      Email: 'M.Ibo@gmail.com',
      PhoneNumber: '01022523665',
      FirstName: 'محمد',
      SecondName: 'ابراهيم',
      ReligionID: 1//الديانه
    } as Person;
    return person;
  }

  postData(body: TransactionInputModel){
    return this.http.post<RequestOutputModel>(`${environment.localBaseUrl}${TRANS_API.create}`, body);
  }
}
