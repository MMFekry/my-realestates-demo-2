import { Injectable } from '@angular/core';
import { environment } from "src/environments/environment";
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { GGHeader } from '../../models/GG/ggheader';

import { NID } from "src/app/@shared/static/nid";
import { REALESTATE_API } from "src/app/@core/api/api-config/realestate-api";
import { FavoriteRealestateResult } from 'src/app/models/realestates/favorite-realestate-result';

@Injectable({
  providedIn: 'root'
})
export class RealestateFavoriteService {
body!: GGHeader;
  constructor(private http: HttpClient) { }

  getdata(  
  ): Observable<FavoriteRealestateResult> {
    //debugger;
    return this.http.get<FavoriteRealestateResult>(`${environment.localBaseUrl}${REALESTATE_API.favorite.get}${NID.fav}`);
   }
}
