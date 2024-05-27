import { Component, OnInit } from '@angular/core';
import { TransactionInputModel } from 'src/app/models/Transactions/transaction-input-model';
import { TransactionService } from 'src/app/service/transactions/transaction.service';
import { LoadingController, ToastController } from '@ionic/angular';
import { RequestOutputModel } from "src/app/models/Requests/RequestOutputModel";
import { Router } from '@angular/router';
import { RegisteredRealestate } from 'src/app/models/realestates/registered-realestate';

@Component({
  selector: 'app-salevalue',
  templateUrl: './salevalue.page.html',
  styleUrls: ['./salevalue.page.scss'],
})
export class SalevaluePage implements OnInit {
  output!: RequestOutputModel;
  registered!: RegisteredRealestate;

  constructor(private transactionService : TransactionService,
    private loadingCtrl: LoadingController, private tosterCtrl : ToastController,
    private router: Router
  ) {

   }

   ngOnInit() {
    let state = this.router.getCurrentNavigation();
    var current = state?.extras.state;
    if (current) {
      console.log(current['registered']);
      this.registered = (current['registered']) as RegisteredRealestate;
    }
  }

  async PostData(){
    debugger;

    let loading = await this.loadingCtrl.create({
      message: 'Loading..',
      spinner: 'bubbles',
    });
    await loading.present();
    let trans = this.CreateTransaction();
    this.transactionService.postData(trans).subscribe(async res => 
      {

        await loading.dismiss();
        this.output = res;
        console.log(this.output);
        if(this.output.ResponseCode == 200){
          let toast = await this.tosterCtrl.create({
            message: this.output.ResponseMessage,
            duration: 4000
          });
          await toast.present();

          this.router.navigate(['tabs/pages/feessale'])

        }
        else{
          let toast = await this.tosterCtrl.create({
            message: this.output.ResponseMessage,
            duration: 4000
          });
          await toast.present();
        }

      }, async e => {
        await loading.dismiss();
        let toast = await this.tosterCtrl.create({
          message: e.message,
          duration: 4000
        });
        await toast.present();
      });

  }

  CreateTransaction(): TransactionInputModel{
    return this.transactionService.CreateTransaction(5500, 11206, 37591);
  }
}
