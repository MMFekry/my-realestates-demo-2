import { Component, OnInit } from '@angular/core';
import { LoadingController, InfiniteScrollCustomEvent } from '@ionic/angular';
import { Router } from '@angular/router';

import { FavoriteRealestateResult } from 'src/app/models/realestates/favorite-realestate-result';
import { RegisteredRealestateResult } from 'src/app/models/realestates/registered-realestate-result';
import { RealestateFavoriteService } from '../../service/realestates/realestate-favorite.service';
import { RegisteredRealestatesService } from '../../service/realestates/registered-realestates.service';
import { RegisteredRealestate } from 'src/app/models/realestates/registered-realestate';
import { state } from '@angular/animations';
import { FavoriteRealestate } from 'src/app/models/realestates/favorite-realestate';

@Component({
  selector: 'app-eservices',
  templateUrl: './eservices.page.html',
  styleUrls: ['./eservices.page.scss'],
})
export class EservicesPage implements OnInit {

  selectedSegment : string ='registedUnits';
  favoriteResult!: FavoriteRealestate[];
  registredResult!: RegisteredRealestate[];
  current = 1;

  constructor(private router: Router, 
    private favService: RealestateFavoriteService,
    private regService: RegisteredRealestatesService,
    private loadingCtrl: LoadingController
  ) { }

  ngOnInit() {
    this.getRegisterd();
    this.getfavorite();

  }

  segmentChanged(ev: any) {
    console.log(ev.target.value);
    this.selectedSegment= ev.target.value;
  }

  async getfavorite(){
    const loading = await this.loadingCtrl.create({
      message: 'Loading..',
      spinner: 'bubbles',
    });
    await loading.present();
  
    this.favService.getdata().subscribe((res) => {
      loading.dismiss();
      //this.favoriteResult.data.push(...res.data);
      
     
     this.favoriteResult = res.data;
     console.log(res);
    },
    (err) => {
      console.log(err);
      loading.dismiss();
    })
  }

  getRegisterd(){
    this.regService.getdata().subscribe(res => {
     this.registredResult = res.data;
     console.log(res);
    })
  }

  goDetails(){
    //reg: RegisteredRealestate){
    //this.regService.goDetails(reg);
    this.router.navigate(['tabs/pages/eservicelv1'])
    
  }
}
