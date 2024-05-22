import { LocationMap } from "../realestates/location-map";
import { Unit } from "../realestates/unit"
import { NumberType } from "./LocationAddress";

export interface BuildingAddress {
    Governorate: number;
    City: number;
    Village: number;
    StreetName: number;
    Area: number;
    FloorNumbers: number;
    BuildingUnifiedNumber: string;
    BuildingInfo: BuildingInfo;
    LocationMaps: LocationMap[];
}

export interface BuildingInfo{
    NumberType: NumberType[],
    UnitInfo: Unit[]
}
