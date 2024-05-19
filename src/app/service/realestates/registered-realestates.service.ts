import { Injectable } from '@angular/core';
import { environment } from "src/environments/environment";
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { REALESTATE_API } from "src/app/@core/api/api-config/realestate-api";
import { NID } from "src/app/@shared/static/nid";
import { GGHeader } from 'src/app/models/GG/ggheader';
import { RegisteredRealestateResult } from 'src/app/models/realestates/registered-realestate-result';
import { RegisteredRealestate } from 'src/app/models/realestates/registered-realestate';

@Injectable({
  providedIn: 'root'
})
export class RegisteredRealestatesService {

  body!: GGHeader;
  registered!: RegisteredRealestate;
  constructor(private http: HttpClient) { }

  getdata(  
  ): Observable<RegisteredRealestateResult> {
    return this.http.get<RegisteredRealestateResult>(`${environment.localBaseUrl}${REALESTATE_API.registered.get}${NID.reg}`);
   }

   goDetails(reg: RegisteredRealestate){
    this.registered = reg;
   }
}
