import { Component, OnInit } from '@angular/core';
import { LoadingController, InfiniteScrollCustomEvent, ToastController} from '@ionic/angular';
import { Router } from '@angular/router';

import { RealestateFavoriteService } from '../../service/realestates/realestate-favorite.service';
import { RegisteredRealestatesService } from '../../service/realestates/registered-realestates.service';
import { RegisteredRealestate } from 'src/app/models/realestates/registered-realestate';
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
  loading: boolean=true;
  err!: string;
  constructor(private router: Router, 
    private favService: RealestateFavoriteService,
    private regService: RegisteredRealestatesService,
    private loadingCtrl: LoadingController,
    private tosterCtrl : ToastController
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

  getRegisterd(event?: any){
    if(!event) this.loading = true;

    this.regService.getdata().subscribe(async res => {
      event? event.target.complete() : this.loading = false;
    
     this.registredResult = res.data;
     console.log(res);

     if(res.ResponseCode == 200){
      let toast = await this.tosterCtrl.create({
        message: res.ResponseMessage,
        duration: 4000,
        //position: 'middle',
      });
      await toast.present();

    }
    else{
      let toast = await this.tosterCtrl.create({
        message: res.ResponseMessage
      });
      await toast.present();

    }
    }, async e => {
      event? event.target.complete() : this.loading = false;
      this.err = e;

        let toast = await this.tosterCtrl.create({
          message: e.message,
          duration: 4000,
          //position: 'middle',
        });
        await toast.present();

    });
  }

  goDetails(){
    //reg: RegisteredRealestate){
    //this.regService.goDetails(reg);
    this.router.navigate(['tabs/pages/eservicelv1'])
    
  }

  
  doRefresh(event: any){
    this.getRegisterd(event);
}

}
