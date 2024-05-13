import { LocationMap } from "./location-map";
import { Unit } from "./unit";

export interface Building {
    Governorate: string,
    PoliceOffice: string,
    DistrictName: string,
    StreetName: string,
    Centroid: string,
    Description: string,
    Area: string,
    BuildingUnifiedNumber: string,
    LocationMaps: LocationMap[],
    UnitInfo: Unit
  }
