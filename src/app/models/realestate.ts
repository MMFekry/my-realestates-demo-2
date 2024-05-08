export interface GGHeader {

        CorrelationId : string,
        OriginatingChannel : number,
        ChannelRequestId : string,
        OriginatingUserType : number,
        OriginatingUserIdentifier : string,
        ServiceEntityId : string,
        ServiceSlug : string,
        ResponseCode : number
}
export interface RealestateResult {
    RequestID: number,
    Requests_RequestsID: number,
    data: Realestate[],
    ResponseCode: number,
    ResponseMessage: string
}
interface Realestate{
    PropertyType: number,
    PropertyTypeName: string,
      IsLand: boolean,
      IsBuilding: boolean,
      IsUnit: boolean,
      ISNUCA: boolean,
      HasLicense: boolean,
      LandsInfo: LandInfo[],
      Parties: Party[]
}
interface Party{
    FirstName: string,
          SecondName: string,
          NationalID: string
        
}
interface LandInfo{
    Governorate: string,
    PoliceOffice: string,
    DistrictName: string,
    Area: string,
    BuildingUnifiedNumber: string,
    Number: string,
    Centroid: boolean,
    // "LocationMaps": [
    //   {
    //     "Latitude": "10.2",
    //     "Longitude": "10.3"
    //   }
    // ],
    // "BuildingsInfo": [
    //   {
    //     "Governorate": "القاهره",
    //     "PoliceOffice": "التبين",
    //     "DistrictName": "التبين البحريه",
    //     "StreetName": "جمال عبدالناصر",
    //     "Centroid": "False",
    //     "Description": null,
    //     "Area": "50 م2 ",
    //     "BuildingUnifiedNumber": null,
    //     "LocationMaps": [
    //       {
    //         "Latitude": "85",
    //         "Longitude": "13"
    //       }
    //     ],
    //     "UnitInfo": null
    //   }
    // ]
}