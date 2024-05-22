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
