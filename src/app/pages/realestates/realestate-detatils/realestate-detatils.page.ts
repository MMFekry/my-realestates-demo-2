import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RealestateService } from '../../../service/realestate-service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-realestate-detatils',
  templateUrl: './realestate-detatils.page.html',
  styleUrls: ['./realestate-detatils.page.scss'],
})
export class RealestateDetatilsPage implements OnInit {
  realestate: any | null = null;
  imageBaseUrl = environment.images;

  constructor(private route: ActivatedRoute, private service: RealestateService) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.service.getRealestatesDetails(id||'').subscribe((res) => {
      this.realestate = res;
    });
  }
  
}
