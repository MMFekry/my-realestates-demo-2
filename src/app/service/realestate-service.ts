import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
export interface ApiResult {
    page: number;
    results: any[];
    total_pages: number;
    total_results: number;
  }

  @Injectable({
    providedIn: 'root',
  })
export class RealestateService {
  routeParams : any = [];

    constructor(private http: HttpClient){}

    getRealestates(page=1): Observable<ApiResult>{
        return this.http.get<ApiResult>(`${environment.baseUrl}/movie/popular?api_key=${environment.apiKey}&page=${page}`);
    }

    getRealestatesDetails(id: string): Observable<any>{
        return this.http.get(`${environment.baseUrl}/movie/${id}?api_key=${environment.apiKey}`);
    }

    getParams() :any
    {
       return this.routeParams;
      }

    setParams(body: any){
      this.routeParams = body;
    }

    getData(endPoint: string) 
    {
      return this.http.get(environment.todoBaseUrl+endPoint);
    }

    postData(endPoint: string, body: any){
      return this.http.post(environment.todoBaseUrl+endPoint, body);
    }

    deleteData(endPoint: string){
      return this.http.delete(environment.todoBaseUrl+endPoint);

    }

    updateData(endPoint: string, body: any){
      return this.http.put(environment.todoBaseUrl+endPoint, body);

    }
    
}
