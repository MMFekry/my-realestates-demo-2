import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { ConfigurationLookups } from 'src/app/@shared/enums/enums';
import { Lookup } from 'src/app/models/lookups/LookupOutputModel';
import { LookupService } from 'src/app/service/lookups/lookup.service';

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
 constructor(private modalCtrl : ModalController, private fb: FormBuilder,
    private lookupService : LookupService
  ) { 
    this.CreateForm();
    this.CreateSubForm();
  }

  ngOnInit() {
    debugger;
    this.getGovernorates();
    this.getFloors();
    this.getFloorNumbers();
    this.getUnitNumbers();
    this.getNumberTypes();
    this.getDescList();
    this.getLetterList();
  }

  CreateForm(){

    this.favform = this.fb.group({
      govID: ['', Validators.required],
      cityID: ['', Validators.required],
      districtID: ['', Validators.required],
      streetID: ['', Validators.required],
      floorID: ['', Validators.required],
      unitNumberID: ['', Validators.required],
      area: ['', Validators.required],
      floorNumberID: ['', Validators.required],
      description: ['', Validators.required],
    });
  }
  CreateSubForm(){

    this.subFavForm = this.fb.group({
      numberType: ['', Validators.required],
      upnumber: ['', Validators.required],
      upletter: ['', Validators.required],
      dennumber: ['', Validators.required],
      denletter: ['', Validators.required],
      desclist: ['', Validators.required],
      towerlist: ['', Validators.required],
      floorNumberID: ['', Validators.required],
      description: ['', Validators.required],
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
    //debugger;
    //let districtID = event.detail.value;
    this.lookupService.getLookupsData(ConfigurationLookups.Floors, 0).subscribe(res => {
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

  
  getUnitNumbers(){
    //debugger;
    //let districtID = event.detail.value;
    this.lookupService.getLookupsData(ConfigurationLookups.Floors, 0).subscribe(res => {
      this.unitNumbers = res.data
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
    console.log(this.subFavForm.value);
  }

  
  OnSubmitForm(){
    console.log(this.favform.value);
  }
}
