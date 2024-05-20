import { Component, OnInit } from '@angular/core';
import { TransactionInputModel } from 'src/app/models/Transactions/transaction-input-model';
import { TransactionService } from 'src/app/service/transactions/transaction.service';
import { LoadingController, ToastController } from '@ionic/angular';
import { RequestOutputModel } from "src/app/models/Requests/RequestOutputModel";
import { Router } from '@angular/router';

@Component({
  selector: 'app-salevalue',
  templateUrl: './salevalue.page.html',
  styleUrls: ['./salevalue.page.scss'],
})
export class SalevaluePage implements OnInit {
  output!: RequestOutputModel;

  constructor(private transactionService : TransactionService,
    private loadingCtrl: LoadingController, private tosterCtrl : ToastController,
    private router: Router
  ) {

   }

  ngOnInit() {
  }

  async PostData(){
    debugger;

    let loading = await this.loadingCtrl.create({});
    await loading.present();
    let trans = this.CreateTransaction();
    this.transactionService.postData(trans).subscribe(async res => 
      {

        await loading.dismiss();
        this.output = res;
        console.log(this.output);
        if(this.output.ResponseCode == 200){
          let toast = await this.tosterCtrl.create({
            message: this.output.ResponseMessage
          });
          await toast.present();

          //this.router.navigate(['../addparty'])
          this.router.navigate(['tabs/pages/addparty'])

        }
        else{
          let toast = await this.tosterCtrl.create({
            message: this.output.ResponseMessage
          });
          await toast.present();
          //this.router.navigate(['tabs/pages/addparty'])

        }

      }, async e => {
        await loading.dismiss();
        let toast = await this.tosterCtrl.create({
          message: e.message
        });
        await toast.present();
      });

  }

  CreateTransaction(): TransactionInputModel{
    return this.transactionService.CreateTransaction(5500, 11206, 37591);
  }
}
