import { Component, OnInit } from '@angular/core';
import { RegisteredRealestate } from 'src/app/models/realestates/registered-realestate';
import { Router } from '@angular/router';

@Component({
  selector: 'app-second-servces',
  templateUrl: './second-servces.page.html',
  styleUrls: ['./second-servces.page.scss'],
})
export class SecondServcesPage implements OnInit {

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

  GoConsensualsale(reg: RegisteredRealestate){
    //routerLink="../consensual-sale"
    this.router.navigate(['tabs/pages/consensual-sale'], {state: {registered : reg}})

  }
}
