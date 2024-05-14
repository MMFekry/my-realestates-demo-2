import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-eservicelv1',
  templateUrl: './eservicelv1.page.html',
  styleUrls: ['./eservicelv1.page.scss'],
})
export class Eservicelv1Page implements OnInit {

  constructor(private router: Router) {
    let state = router.getCurrentNavigation();
    var current = state?.extras.state;
if (current) {
    console.log(current['data']);
}
   }

  ngOnInit() {
  }

}
