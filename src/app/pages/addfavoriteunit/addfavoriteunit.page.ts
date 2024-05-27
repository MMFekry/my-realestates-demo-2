import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { ConfigurationLookups, PropertyTypes } from 'src/app/@shared/enums/enums';
import { Favorite } from 'src/app/@shared/models/favorite';
import { BuildingNumber } from 'src/app/@shared/models/building-number';
import { NID } from 'src/app/@shared/static/nid';
import { BuildingAddress } from 'src/app/models/favorite/BuildingAddress';
import { Contract } from 'src/app/models/favorite/Contract';
import { Land, LocationAddress } from 'src/app/models/favorite/LocationAddress';
import { PostFavoriteInputModel, PostFavoriteOutputModel } from 'src/app/models/favorite/PostFavoriteInputModel';
import { Lookup } from 'src/app/models/lookups/LookupOutputModel';
import { FavoriteService } from 'src/app/service/favorite/favorite.service';
import { LookupService } from 'src/app/service/lookups/lookup.service';
import { LoadingController, ToastController } from '@ionic/angular';
import { Router } from '@angular/router';
import { Party } from 'src/app/models/realestates/party';
import { GGHeader } from 'src/app/models/GG/ggheader';
import { LocationMap } from 'src/app/models/realestates/location-map';
import { AddressReview } from 'src/app/@shared/models/address-review';

@Component({
  selector: 'app-addfavoriteunit',
  templateUrl: './addfavoriteunit.page.html',
  styleUrls: ['./addfavoriteunit.page.scss'],
})
export class AddfavoriteunitPage implements OnInit {
  selectedTab : string = 'addaddress';
 governorates!: Lookup[] 
 cities!: Lookup[]
 districts!: Lookup[]
 streets!: Lookup[]
 floors!: Lookup[]
 unitNumbers!: Lookup[]
 floorNumbers!: Lookup[]

 numberTypes!: Lookup[]
 descList!: Lookup[]
 letterList!: Lookup[]
 towers!:Lookup[]
 favform: FormGroup=new FormGroup({});
 subFavForm : FormGroup=new FormGroup({});
 favorite!: Favorite;
 output!: PostFavoriteOutputModel;
 building!: BuildingNumber;
 constructor(private modalCtrl : ModalController, private fb: FormBuilder, private router: Router,
    private lookupService : LookupService, private favoriteService: FavoriteService,
    private loadingCtrl: LoadingController, private tosterCtrl : ToastController,
  ) { 
    this.CreateForm();
    this.CreateSubForm();
  }

  ngOnInit() {
    debugger;
    this.getGovernorates();
    this.getFloors();
    this.getFloorNumbers();
    this.getNumberTypes();
    this.getDescList();
    this.getLetterList();
  }
 
  async postForm(){
    debugger;
    console.log(this.favform.getRawValue());
    let favorite: Favorite = {...this.favform.value,...this.subFavForm.value};
    let review: AddressReview = this.GetAddressReview(favorite);

    let model = this.CreateFavoriteModel(favorite);
    let loading = await this.loadingCtrl.create({
      message: 'Loading..',
      spinner: 'bubbles',
    });
    // this.router.navigate(['tabs/pages/reviewaddress'], {state: {rev : review, build: this.building}})

    await loading.present();

     this.favoriteService.postdata(model).subscribe(async res => {
       await loading.dismiss();
         this.output = res;
         console.log(this.output);
    //     debugger;
         if(this.output.ResponseCode == 200){
           let toast = await this.tosterCtrl.create({
             message: this.output.ResponseMessage + 'رقم الطلب' + this.output.RequestID,
             duration: 3000
           });
           await toast.present();

           this.router.navigate(['tabs/pages/reviewaddress'], {state: {rev : review, build: this.building}})

         }
         else{
           let toast = await this.tosterCtrl.create({
             message: this.output.ResponseMessage,
            duration: 3000
           });
          await toast.present();

         }

       }, async e => {
    //     debugger;

         await loading.dismiss();
         let toast = await this.tosterCtrl.create({
           message: e.message,
           duration: 3000
         });
         await toast.present();
    //     this.router.navigate(['tabs/pages/reviewaddress'])

       });
  }

  GetAddressReview(favorite: Favorite): AddressReview{
    
    let gov = this.governorates.find(_ => _.ID === favorite.govID)
    let city = this.cities.find(_ => _.ID === favorite.cityID)
    let district = this.districts.find(_ => _.ID === favorite.districtID)
    let street = this.streets.find(_ => _.ID === favorite.streetID)
    let floorNumber = this.floorNumbers.find(_ => _.ID === favorite.floorNumberID)
    let floor = this.floors.find(_ => _.ID === favorite.floorID)

    return {
      Governorote: gov?.Name,
      City: city?.Name,
      District: district?.Name,
      FloorCount: floor?.Name,
      FloorNumber: floorNumber?.Name,
      //Street: street?.Name,
      Area: this.favform.get('area')?.value,
      UnitNumber: this.favform.get('unitNumberID')?.value

    } as AddressReview
  }
  CreateFavoriteModel(favorite: Favorite) : PostFavoriteInputModel{
    return {
        GGHeader: {} as GGHeader,
        NationalID: NID.fav,
        FirstName: "محمد",
        SecondName: "إبراهيم",
        PropertyType: PropertyTypes.UnitsAreBuiltOnly,
        ISNUCA: false,
        HasLicense: false,
        ContractInfo: this.CreateContract(favorite)
    } as PostFavoriteInputModel
  }

  CreateContract(favorite: Favorite): Contract{
    return {
      LocationAddress: this.CreateLocationAddress(favorite),
      BuildingAddress: this.CreateBuildingAddress(favorite),
      Party: [] as Party[]
    } as Contract
  }

  
  CreateLocationAddress(favorite: Favorite): LocationAddress{
    return {
      Governorate: favorite.govID,
      City: favorite.cityID,
      Village: favorite.districtID,
      StreetName: favorite.streetID,
      Area: favorite.area,
      Centroid: "true",
      SeragCode: "",
      LocationMaps: [] as LocationMap[],
      LandInfo: [{
        NumberType: [
          {
            Types: favorite.numberType,
            Number: favorite.upnumber,
            harf: favorite.upletter,
            Maqam: favorite.dennumber,
            NameID: favorite.towerlist,
            DescriptionID: favorite.desclist
          }
        ]
      }]
    } as LocationAddress
  }
  
  CreateBuildingAddress(favorite: Favorite): BuildingAddress{
    return {
      Governorate: favorite.govID,
      City: favorite.cityID,
      Village: favorite.districtID,
      StreetName: favorite.streetID,
      Area: favorite.area,
      FloorNumbers: favorite.floorNumberID,
      BuildingUnifiedNumber: '',
      BuildingInfo: {
        NumberType: [{
          Types: favorite.numberType,
          Number: favorite.upnumber,
          harf: favorite.upletter,
          Maqam: favorite.dennumber,
          NameID: favorite.towerlist,
          DescriptionID: favorite.desclist
        }],
        //UnitInfo: Unit[]
      },
      LocationMaps: [] as LocationMap[],
    } as BuildingAddress
  }

  CreateForm(){

    this.favform = this.fb.group({
      govID: ['', Validators.required],
      cityID: ['', Validators.required],
      districtID: ['', Validators.required],
      streetID: [0, Validators.required],
      floorID: ['', Validators.required],
      unitNumberID: ['', Validators.required],
      area: ['', Validators.required],
      floorNumberID: ['', Validators.required]
    });
  }

  CreateSubForm(){

    this.subFavForm = this.fb.group({
      numberType: [0, Validators.required],
      upnumber: ['', Validators.required],
      upletter: ['', Validators.required],
      dennumber: [''],
      denletter: [0],
      desclist: [0],
      towerlist: [0]
    });
  }

  segmentChanged(ev: any) {
    console.log(ev.target.value);
    this.selectedTab= ev.target.value;
    ev.stopPropagation();
  }

  getGovernorates(){
    this.lookupService.getLookupsData(ConfigurationLookups.Governorate, 0).subscribe(res => {
      this.governorates = res.data
      console.log(res.data)
    });
  }

  getCities(event: any){
    //debugger;
    let govID = event.detail.value;
    this.lookupService.getLookupsData(ConfigurationLookups.PoliceOffice, govID).subscribe(res => {
      this.cities = res.data
      console.log(res.data)
    });
  }

  getDistricts(event: any){
    //debugger;
    let cityID = event.detail.value;
    this.lookupService.getLookupsData(ConfigurationLookups.Districts, cityID).subscribe(res => {
      this.districts = res.data
      console.log(res.data)
    });
  }

  getStreets(event: any){
    //debugger;
    let districtID = event.detail.value;
    this.lookupService.getLookupsData(ConfigurationLookups.Streets, districtID).subscribe(res => {
      this.streets = res.data
      console.log(res.data)
    });
  }

  getTowers(event: any){
    //debugger;
    let streetID = event.detail.value;
    this.lookupService.getLookupsData(ConfigurationLookups.Towers, streetID).subscribe(res => {
      this.towers = res.data
      console.log(res.data)
    });
  }
  
  getFloors(){
    this.lookupService.getLookupsData(ConfigurationLookups.MainFloors, 0).subscribe(res => {
      this.floors = res.data
      console.log(res.data)
    });
  }
 
  getFloorNumbers(){
    //debugger;
    //let districtID = event.detail.value;
    this.lookupService.getLookupsData(ConfigurationLookups.Floors, 0).subscribe(res => {
      this.floorNumbers = res.data
      console.log(res.data)
    });
  }
  
  getNumberTypes(){
    this.lookupService.getLookupsData(ConfigurationLookups.NumberTypes, 0).subscribe(res => {
      this.numberTypes = res.data
      console.log(res.data)
    });
  }

  getDescList(){
    this.lookupService.getLookupsData(ConfigurationLookups.RealEstateDescriptions, 0).subscribe(res => {
      this.descList = res.data
      console.log(res.data)
    });
  }

  getLetterList(){
    this.lookupService.getLookupsData(ConfigurationLookups.Letters, 0).subscribe(res => {
      this.letterList = res.data
      console.log(res.data)
    });
  }

  OnSubmitSubFom(){
    debugger;
    console.log(this.subFavForm.value);
    this.favorite = {...this.subFavForm.value}
    this.building = this.GetBuildingNumber(this.favorite);
    if (this.building.upletterText === undefined){this.building.upletterText = ''}
    if (this.building.upnumberText === undefined){this.building.upnumberText = ''}
    if (this.building.dennumberText === undefined){this.building.dennumberText = ''}
    if (this.building.denletterText === undefined){this.building.denletterText = ''}
    if (this.building.desclistText === undefined){this.building.desclistText = ''}
    if (this.building.towerlistText === undefined){this.building.towerlistText = ''}

  }

  OnSubmitForm(){
    console.log(this.favform.value);
  }

  GetBuildingNumber(favorite: Favorite): BuildingNumber{
    
    let numberType = this.numberTypes.find(_ => _.ID === favorite.numberType)
    let upletter = this.letterList.find(_ => _.ID === Number(favorite.upletter))
    let denletter = this.letterList.find(_ => _.ID === favorite.denletter)
    let desclist = this.descList.find(_ => _.ID === favorite.desclist)
    //let towerlist = this.towers.find(_ => _.ID === favorite.towerlist)
    //if(upletter === undefined){ up}

    return {
      numberTypeText: numberType?.Name,
      upnumberText: this.subFavForm.get('upnumber')?.value,
      upletterText: upletter?.Name,
      dennumberText: this.subFavForm.get('dennumber')?.value,
      denletterText: denletter?.Name,
      desclistText: desclist?.Name,
      //towerlistText: towerlist?.Name,

    } as BuildingNumber
  }
}
