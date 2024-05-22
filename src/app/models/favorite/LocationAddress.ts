import { LocationMap } from "../realestates/location-map";

export interface LocationAddress {
    Governorate: number,
    City: number,
    Village: number,
    StreetName: number,
    Area: number,
    Centroid: string,
    SeragCode: string,
    LocationMaps: LocationMap[],
    LandInfo: Land[]
}

export interface NumberType{
    Types: number,
    Number: number,
    harf: string,
    Maqam: string,
    NameID: number,
    DescriptionID: number
}
export interface Land{
    NumberType: NumberType[]
}
