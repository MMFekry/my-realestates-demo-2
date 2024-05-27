import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegisteredRealestate } from 'src/app/models/realestates/registered-realestate';
@Component({
  selector: 'app-eservicelv1',
  templateUrl: './eservicelv1.page.html',
  styleUrls: ['./eservicelv1.page.scss'],
})
export class Eservicelv1Page implements OnInit {
registered!: RegisteredRealestate;
  constructor(private router: Router) {
    
   }

  ngOnInit() {
    let state = this.router.getCurrentNavigation();
    var current = state?.extras.state;
    if (current) {
      console.log(current['registered']);
      this.registered = (current['registered']) as RegisteredRealestate;
    }
  }

  GoOwnership(reg: RegisteredRealestate){
    //  routerLink="../second-servces"
    this.router.navigate(['tabs/pages/second-servces'], {state: {registered : reg}})

  }
}
