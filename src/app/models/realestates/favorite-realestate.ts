import { Land } from "./land"
import { Party } from "./party"

export interface FavoriteRealestate {
    PropertyType: number,
    PropertyTypeName: string,
      IsLand: boolean,
      IsBuilding: boolean,
      IsUnit: boolean,
      ISNUCA: boolean,
      HasLicense: boolean,
      LandsInfo: Land[],
      Parties: Party[]
}
