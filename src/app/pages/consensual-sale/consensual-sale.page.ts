import { Component, OnInit } from '@angular/core';
import { FormGroup , Validators, FormBuilder } from '@angular/forms';
import { AlertController, ModalController } from '@ionic/angular';
import { Router } from '@angular/router';
import { LoadingController, ToastController } from '@ionic/angular';
import { PartyService } from 'src/app/service/parties/party.service';
import { Party } from 'src/app/@shared/models/party';


@Component({
  selector: 'app-consensual-sale',
  templateUrl: './consensual-sale.page.html',
  styleUrls: ['./consensual-sale.page.scss'],
})
export class ConsensualSalePage implements OnInit {
 isPersentageShown:boolean=true;
 form: FormGroup= new FormGroup({});
 alert : AlertController = new AlertController();
 map = new Map<string, Party>();
 party!: Party;
  constructor(private modalCtrl : ModalController, private fb: FormBuilder,
    private service: PartyService, private router: Router,
    private loadingCtrl: LoadingController, private tosterCtrl : ToastController
    //private alert: AlertController
  ) {
    this.CreateForm();

   }

  ngOnInit() {
    this.patchForm();

  }

  patchForm(){
    if(this.party){
      this.form.patchValue({
      nid: this.party.NID,
      percentage: this.party.Percentage,
      factory: this.party.FactoryNumber
      });
    }
  }
  CreateForm(){

    this.form = this.fb.group({
      nid: ['', Validators.required],
      factory: ['', Validators.required],
    });
  }

  togglePersentage() 
  {
    this.isPersentageShown=!this.isPersentageShown;
  }

  async onDelete(){
    let al = this.alert.create({
      header: "confirm delete",
      message: "متأكد من مسح الطرف؟",
      mode:"md",
      buttons: [{
        text:"لا",
        role:"cancel"
      },
      {
        text:"نعم",
        handler:() => {
          console.log("todo delete");
          //debugger;

          this.form.reset();
          let form = this.form.value;
          this.party = { ...form}
        }
      }]
    });
    
    (await al).present();
  }

  async OnSubmit(){
    //debugger;
    let form = this.form.value;
   
   let loading = await this.loadingCtrl.create({});
   await loading.present();

   if(this.party){
    this.party = {
      ...form
    }
    this.service.updateData('parties/'+ this.party.Id, this.party).subscribe(async res => 
    {
      await loading.dismiss();
      let toast = await this.tosterCtrl.create({
        message:'party updated!'
      });
      await toast.present();
      await toast.dismiss();

    }, async e => {
      await loading.dismiss();
      let toast = await this.tosterCtrl.create({
        message: e.message
      });
      await toast.present();
    });    
  }
  else{
   this.party = {
    ...form
  }
  this.service.postData('parties', this.party).subscribe(async res => 
  {
    await loading.dismiss();
    let toast = await this.tosterCtrl.create({
      message:'party saved'
    });
    await toast.present();
    await toast.dismiss();

  }, async e => {
    await loading.dismiss();
    let toast = await this.tosterCtrl.create({
      message: e.message
    });
    await toast.present();
    await toast.dismiss();
  });
  }
}
}