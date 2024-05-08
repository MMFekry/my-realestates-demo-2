import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.page.html',
  styleUrls: ['./product-list.page.scss'],
})
export class ProductListPage implements OnInit {
 products: Product[] = [];
  constructor(private service: ProductService) { }

  ngOnInit() {
    this.getproductList();
  }
 getproductList(){
  this.service.getproducts().subscribe(res => {
    this.products = res;
  });
 }
}
