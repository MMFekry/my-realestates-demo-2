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
 favform: FormGroup=new FormGroup({});
  constructor(private modalCtrl : ModalController, private fb: FormBuilder,
    private lookupService : LookupService
  ) { 
    this.CreateForm()
  }

  ngOnInit() {
    debugger;
    this.getGovernorates();
  }

  CreateForm(){

    this.favform = this.fb.group({
      govID: ['', Validators.required],
      cityID: ['', Validators.required],
      districtID: ['', Validators.required],
      streetID: ['', Validators.required],
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
    debugger;
    let govID = event.detail.value;
    this.lookupService.getLookupsData(ConfigurationLookups.PoliceOffice, govID).subscribe(res => {
      this.cities = res.data
      console.log(res.data)
    });
  }

  
  getDistricts(event: any){
    debugger;
    let cityID = event.detail.value;
    this.lookupService.getLookupsData(ConfigurationLookups.Districts, cityID).subscribe(res => {
      this.districts = res.data
      console.log(res.data)
    });
  }

  
  getStreets(event: any){
    debugger;
    let districtID = event.detail.value;
    this.lookupService.getLookupsData(ConfigurationLookups.Districts, districtID).subscribe(res => {
      this.streets = res.data
      console.log(res.data)
    });
  }
}
