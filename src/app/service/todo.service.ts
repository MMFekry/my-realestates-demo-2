import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(private http: HttpClient) { }

  getJSon() :any{
    return this.http.get('assets/data/db.json');
      //.map(res => res.json());
  } 
}
