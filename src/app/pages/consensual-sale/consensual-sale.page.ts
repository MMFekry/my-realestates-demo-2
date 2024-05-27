import { Component, OnInit } from '@angular/core';
import { FormGroup , Validators, FormBuilder } from '@angular/forms';
import { AlertController, ModalController } from '@ionic/angular';
import { Router } from '@angular/router';
import { LoadingController, ToastController } from '@ionic/angular';
import { PartyService } from 'src/app/service/parties/party.service';
import { Party } from 'src/app/@shared/models/party';
import { RequestService } from 'src/app/service/requests/request.service';
import { RequestOutputModel } from "src/app/models/Requests/RequestOutputModel";
import { RegisteredRealestate } from 'src/app/models/realestates/registered-realestate';


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
 output!: RequestOutputModel;
 isDeleted:boolean = false;
 registered!: RegisteredRealestate;

  constructor(private modalCtrl : ModalController, private fb: FormBuilder,
    private partyService: PartyService, private router: Router,
    private loadingCtrl: LoadingController, private tosterCtrl : ToastController,
    private requestService: RequestService
  ) {
    this.CreateForm();

   }

  ngOnInit() {
    let state = this.router.getCurrentNavigation();
    var current = state?.extras.state;
    if (current) {
      console.log(current['registered']);
      this.registered = (current['registered']) as RegisteredRealestate;
    }

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
          debugger;

         this.form.reset();
          this.isDeleted = true;
          this.party = {...this.form.value}
          console.log(this.form.getRawValue());

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
    this.partyService.updateData('parties/'+ this.party.Id, this.party).subscribe(async res => 
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
  this.partyService.postData('parties', this.party).subscribe(async res => 
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

  async CreateRequest(reg: RegisteredRealestate){
    this.router.navigate(['tabs/pages/salevalue'], {state: {registered : reg}})

    debugger;

    let loading = await this.loadingCtrl.create({
      message: 'Loading..',
      spinner: 'bubbles',
    });
    await loading.present();

    this.requestService.postData().subscribe(async res => 
      {

        await loading.dismiss();
        this.output = res;
        console.log(this.output);
        if(this.output.ResponseCode == 200){
          let toast = await this.tosterCtrl.create({
            message: this.output.ResponseMessage
          });
          await toast.present();

          //this.router.navigate(['tabs/pages/salevalue'])

        }
        else{
          let toast = await this.tosterCtrl.create({
            message: this.output.ResponseMessage
          });
          await toast.present();

        }

      }, async e => {
        await loading.dismiss();
        let toast = await this.tosterCtrl.create({
          message: e.message
        });
        await toast.present();
      });
  }
}