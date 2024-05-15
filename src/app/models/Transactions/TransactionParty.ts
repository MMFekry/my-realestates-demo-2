import { Person } from "../Requests/Person";



export interface TransactionParty {
    FirstName: string;
    SecondName: string;
    NationalID: string;
    DelegateID: number;
    ThirdName: string;
    FourthName: string;
    NationalIDType: number;
    BirthDate: Date;
    PassDate: Date;
    NationalityID: number;
    PartyTypeID: number;
    PhoneNumber: string;
    ReligionID: number;
    Address: string;
    MeterValue: number;
    PricePerParty: number;
    PersonsData: Person;
}
