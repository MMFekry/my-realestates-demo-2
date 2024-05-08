import { Injectable } from '@angular/core';
import { environment } from "src/environments/environment";
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { GGHeader, RealestateResult } from '../models/realestate';

@Injectable({
  providedIn: 'root'
})
export class RealestateFavoriteService {
body!: GGHeader;
  constructor(private http: HttpClient) { }

  getdata(  
  ): Observable<RealestateResult> {
    return this.http.get<RealestateResult>(`${environment.realeststeBaseUrl}GetFavouriteEstate?NationalID=9899797`);
   }
}
