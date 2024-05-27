import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AddressReview } from 'src/app/@shared/models/address-review';
import { Favorite } from 'src/app/@shared/models/favorite';
import { FavoriteService } from 'src/app/service/favorite/favorite.service';

@Component({
  selector: 'app-reviewaddress',
  templateUrl: './reviewaddress.page.html',
  styleUrls: ['./reviewaddress.page.scss'],
})
export class ReviewaddressPage implements OnInit {
  review!: AddressReview;
 governorate!: string;
 city!: string;
 district!: string;  
  constructor(private favoriteService: FavoriteService, private router: Router) { 
    
  }

  ngOnInit() {
    debugger;
    let state = this.router.getCurrentNavigation();
    var current = state?.extras.state;
    if (current) {
        console.log(current['rev']);
        this.review = (current['rev']) as AddressReview; 
    }
    // let nav = this.router.getCurrentNavigation();
    // if(nav != null){
    //   let x = nav.extras.state.rev
    //   this.review = () as AddressReview; 
    //   this.governorate = this.review.Governorote;
    //   this.city = this.review.City;
    //   this.district = this.review.District;
    // }
    console.log(this.review)
 }

}
