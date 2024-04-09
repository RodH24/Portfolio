import { Component } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent {

  name: string = 'Hector Rodriguez';
  urlImg: string = 'https://metadatastr.blob.core.windows.net/imagesblogsafe/20180605-princ.jpg';
  bannerImg: string = `url('${this.urlImg}')`;
}
