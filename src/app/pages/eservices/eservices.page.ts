import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-eservices',
  templateUrl: './eservices.page.html',
  styleUrls: ['./eservices.page.scss'],
})
export class EservicesPage implements OnInit {

  selectedSegment : string ='registedUnits';
  

  constructor() { }

  ngOnInit() {
  }

  segmentChanged(ev: any) {
    console.log(ev.target.value);
    this.selectedSegment= ev.target.value;
  }

}
