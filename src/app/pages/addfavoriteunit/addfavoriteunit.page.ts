import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-addfavoriteunit',
  templateUrl: './addfavoriteunit.page.html',
  styleUrls: ['./addfavoriteunit.page.scss'],
})
export class AddfavoriteunitPage implements OnInit {
  selectedTab : string = 'addaddress';

  constructor(private modalCtrl : ModalController) { }

  ngOnInit() {
  }

  segmentChanged(ev: any) {
    console.log(ev.target.value);
    this.selectedTab= ev.target.value;
  }

}
