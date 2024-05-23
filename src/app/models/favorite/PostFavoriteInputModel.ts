import { GGHeader } from "../GG/ggheader"

import { Contract } from "./Contract"

export interface PostFavoriteInputModel
    {
        GGHeader: GGHeader,
        NationalID: string,
        FirstName: string,
        SecondName: string,
        PropertyType: number,
        ISNUCA: boolean,
        HasLicense: boolean,
        ContractInfo: Contract
      }

export interface PostFavoriteOutputModel{
    RequestID: number,
    Requests_RequestsID: number,
    data: number,
    ResponseCode: number,
    ResponseMessage: string
  }
