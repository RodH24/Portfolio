import { Component } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent {

  name: string = 'Hector Rodriguez';
  urlImg: string = 'https://watermark.lovepik.com/photo/50049/3069.jpg_wh1200.jpg';
  bannerImg: string = `url('${this.urlImg}')`;
}
