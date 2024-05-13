import { LocationMap } from "./location-map";
import { Building } from "./building";

export interface Land {
    Governorate: string,
    PoliceOffice: string,
    DistrictName: string,
    Area: string,
    BuildingUnifiedNumber: string,
    Number: string,
    Centroid: boolean,
    LocationMaps: LocationMap[],
     BuildingsInfo: Building[]
}