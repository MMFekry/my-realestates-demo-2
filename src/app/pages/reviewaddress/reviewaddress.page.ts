import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AddressReview } from 'src/app/@shared/models/address-review';
import { BuildingNumber } from 'src/app/@shared/models/building-number';
import { Favorite } from 'src/app/@shared/models/favorite';
import { FavoriteService } from 'src/app/service/favorite/favorite.service';

@Component({
  selector: 'app-reviewaddress',
  templateUrl: './reviewaddress.page.html',
  styleUrls: ['./reviewaddress.page.scss'],
})
export class ReviewaddressPage implements OnInit {
  review!: AddressReview;
  building!: BuildingNumber;

  constructor(private router: Router) { 
    
  }

  ngOnInit() {
    debugger;
    let state = this.router.getCurrentNavigation();
    var current = state?.extras.state;
    if (current) {
        console.log(current['rev']);
        this.review = (current['rev']) as AddressReview; 
        this.building = (current['build']) as BuildingNumber; 

    }
    
 }

}
