import { Component, OnInit } from '@angular/core';
import { RealestateFavoriteService } from '../../service/realestate-favorite.service';
import { RealestateResult } from 'src/app/models/realestate';


@Component({
  selector: 'app-eservices',
  templateUrl: './eservices.page.html',
  styleUrls: ['./eservices.page.scss'],
})
export class EservicesPage implements OnInit {

  selectedSegment : string ='registedUnits';
  result!: RealestateResult;
  constructor(private service: RealestateFavoriteService) { }

  ngOnInit() {
    this.getfavorite();
  }

  segmentChanged(ev: any) {
    console.log(ev.target.value);
    this.selectedSegment= ev.target.value;
  }

  getfavorite(){
    this.service.getdata().subscribe(res => {
     this.result = res;
     console.log(res);
    })
  }
}
