import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: 'root'
})
export class PartyService {
  routeParams : any = [];

  constructor(private http: HttpClient) { }

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
