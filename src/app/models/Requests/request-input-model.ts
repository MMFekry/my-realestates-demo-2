import { GGHeader } from "../GG/ggheader"

export interface RequestInputModel {
    GGHeader: GGHeader,
    DelegateType: number,
    RequestID: number,
    DelegatedPersonName: string,
    Person: Person
}

export interface Person
{
    NationalID: string,
    NationalIDType: number,
    Address: string,
    NationalityID: number,
    Email: string,
    PhoneNumber: string,
    FirstName: string,
    SecondName: string,
    ReligionID: number
  }

  export interface RequestOutputModel{
        RequestID: number,
        Requests_RequestsID: number,
        ResponseCode: number,
        ResponseMessage: string
  }
