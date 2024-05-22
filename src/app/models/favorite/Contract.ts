import { Party } from "../realestates/party";
import { BuildingAddress } from "./BuildingAddress";
import { LocationAddress } from "./LocationAddress";


export interface Contract {
    LocationAddress: LocationAddress;
    BuildingAddress: BuildingAddress;
    Party: Party[];
}
