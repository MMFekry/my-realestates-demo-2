
export interface LookupOutputModel {
    data: Lookup[],
    ResponseCode: number,
    ResponseMessage: string
}

export interface Lookup {
    ID: number,
    Name: string
}