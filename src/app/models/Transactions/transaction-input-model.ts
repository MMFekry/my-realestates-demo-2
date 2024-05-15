import { GGHeader } from "../GG/ggheader"
import { TransactionParty } from "./TransactionParty"

export interface TransactionInputModel {
    GGHeader: GGHeader,
    TransactionType: number,
    ContractType: number,
    Court: number,
    ClaimNo: number,
    TransactionDate: Date,
    Price: number,
    JudgmentFees: number,
    StayPeriod: number,
    RequestID: number,
    Requests_RequestsID: number,
    Parties: TransactionParty[]
}


