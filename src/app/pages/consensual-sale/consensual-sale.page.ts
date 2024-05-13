import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ModalController } from '@ionic/angular';


@Component({
  selector: 'app-consensual-sale',
  templateUrl: './consensual-sale.page.html',
  styleUrls: ['./consensual-sale.page.scss'],
})
export class ConsensualSalePage implements OnInit {
 isPersentageShown:boolean=true;
  constructor(private modalCtrl : ModalController) {
   
   }

  ngOnInit() {
   
  }


  togglePersentage() 
  {
    this.isPersentageShown=!this.isPersentageShown;
  }

}