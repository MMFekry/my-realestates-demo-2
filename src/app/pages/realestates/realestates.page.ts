import { Component, OnInit } from '@angular/core';
import { RealestateService } from '../../service/realestate-service';
import { LoadingController, InfiniteScrollCustomEvent } from '@ionic/angular';
import { environment } from 'src/environments/environment';
@Component({
  selector: 'app-realestates',
  templateUrl: './realestates.page.html',
  styleUrls: ['./realestates.page.scss'],
})
export class RealestatesPage implements OnInit {

  realestates:any[] = [];
  current = 1;
  imageBaseUrl = environment.images;
  constructor(private realestateService: RealestateService, private loadingCtrl: LoadingController) {}
ngOnInit(){
  this.loadRealEstates();
}

async loadRealEstates(event?: InfiniteScrollCustomEvent){
  const loading = await this.loadingCtrl.create({
    message: 'Loading..',
    spinner: 'bubbles',
  });
  await loading.present();

  this.realestateService.getRealestates(this.current).subscribe((res) => {
    loading.dismiss();
    this.realestates.push(...res.results);
    
    event?.target.complete();
    if (event) {
      event.target.disabled = res.total_pages === this.current;
    }
  },
  (err) => {
    console.log(err);
    loading.dismiss();
  }
);
  
}

loadMore(event: InfiniteScrollCustomEvent) {
  this.current++;
  this.loadRealEstates(event);
}

}
