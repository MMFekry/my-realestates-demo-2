import { Land } from "./land";

export interface RegisteredRealestate {
    PropertyType: string,
    MembersName: string[],
      IsLand: boolean,
      IsBuilding: boolean,
      IsUnit: boolean,
      ContractYear: number,
      ContractNumber: number,
      ContractOffice: number,
      LandsInfo: Land[]
    }
