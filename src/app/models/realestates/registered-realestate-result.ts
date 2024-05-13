import { RegisteredRealestate } from "./registered-realestate"

export interface RegisteredRealestateResult {
    RequestID: number,
    Requests_RequestsID: number,
    data: RegisteredRealestate[],
    ResponseCode: number,
    ResponseMessage: string
}
