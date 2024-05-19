import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from "src/environments/environment";
import { FEES_API } from "src/app/@core/api/api-config/realestate-api";

import { GetFeesResultModel } from 'src/app/models/fees/get-fees-result-model';
import { GetFeesInputModel } from 'src/app/models/fees/get-fees-input-model';

@Injectable({
  providedIn: 'root'
})
export class FeesService {

  constructor(private http: HttpClient) { }

  getdata(requestId: number): Observable<GetFeesResultModel> {
    let body = {
      RequestId: 11206
    } as GetFeesInputModel
    return this.http.post<GetFeesResultModel>(`${environment.localBaseUrl}${FEES_API.get}`,body);
   }
}
