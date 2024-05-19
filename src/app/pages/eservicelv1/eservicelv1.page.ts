import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegisteredRealestate } from 'src/app/models/realestates/registered-realestate';
import {RegisteredRealestatesService} from 'src/app/service/realestates/registered-realestates.service'
@Component({
  selector: 'app-eservicelv1',
  templateUrl: './eservicelv1.page.html',
  styleUrls: ['./eservicelv1.page.scss'],
})
export class Eservicelv1Page implements OnInit {
registered!: RegisteredRealestate;
  constructor(private router: Router, private regservice: RegisteredRealestatesService) {
    let state = router.getCurrentNavigation();
    var current = state?.extras.state;
if (current) {
    console.log(current['data']);
}
   }

  ngOnInit() {
    this.registered = this.regservice.registered;
  }

}
