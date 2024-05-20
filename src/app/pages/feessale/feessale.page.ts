import { Component, OnInit } from '@angular/core';
import { Fees } from 'src/app/models/fees/get-fees-result-model';
import { FeesService } from 'src/app/service/fees/fees.service';

@Component({
  selector: 'app-feessale',
  templateUrl: './feessale.page.html',
  styleUrls: ['./feessale.page.scss'],
})
export class FeessalePage implements OnInit {
  feeprice!: number
  fees!: Fees
  constructor(private feesService: FeesService) { }

  ngOnInit() {
    this.feesService.getdata(11206).subscribe(res =>{
      console.log(res.data)
      this.fees = res.data
    })
  }

}
