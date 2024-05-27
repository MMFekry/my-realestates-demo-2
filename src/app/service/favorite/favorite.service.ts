import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from "src/environments/environment";
import { REALESTATE_API } from "src/app/@core/api/api-config/realestate-api";
import { PostFavoriteOutputModel, PostFavoriteInputModel } from 'src/app/models/favorite/PostFavoriteInputModel';
import { Favorite } from 'src/app/@shared/models/favorite';

@Injectable({
  providedIn: 'root'
})

export class FavoriteService{
  favorite!: Favorite;

    constructor(private http: HttpClient) { }

  postdata(model: PostFavoriteInputModel): Observable<PostFavoriteOutputModel> {
    return this.http.post<PostFavoriteOutputModel>(`${environment.localBaseUrl}${REALESTATE_API.favorite.post}`,model);
   }
}