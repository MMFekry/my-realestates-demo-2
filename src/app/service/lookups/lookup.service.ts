import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LookupOutputModel } from 'src/app/models/lookups/LookupOutputModel';
import { LookupInputModel } from 'src/app/models/lookups/LookupInputModel';

import { Observable } from 'rxjs';
import { environment } from "src/environments/environment";
import { ConfigurationLookups } from 'src/app/@shared/enums/enums';
import { LOOKUP_API } from "src/app/@core/api/api-config/LOOKUP_API";

@Injectable({
  providedIn: 'root'
})
export class LookupService {

  constructor(private http: HttpClient) { }

  getLookupsData(LookupId: ConfigurationLookups, parentID: number): Observable<LookupOutputModel> {
    let body = {
      CategoryID : LookupId,
      ParentID: parentID
    } as LookupInputModel
    return this.http.post<LookupOutputModel>(`${environment.localBaseUrl}${LOOKUP_API.get}`,body);
   }

}
