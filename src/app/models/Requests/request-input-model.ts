import { GGHeader } from "../GG/ggheader"
import { Person } from "./Person"

export interface RequestInputModel {
    GGHeader: GGHeader,
    DelegateType: number,
    RequestID: number,
    DelegatedPersonName: string,
    Person: Person
}


