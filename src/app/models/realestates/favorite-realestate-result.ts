import { FavoriteRealestate } from "./favorite-realestate";

export interface FavoriteRealestateResult {
    RequestID: number,
    Requests_RequestsID: number,
    data: FavoriteRealestate[],
    ResponseCode: number,
    ResponseMessage: string
}


