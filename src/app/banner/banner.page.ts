import { Component, OnInit } from '@angular/core';
import {AdmobFreeService} from '../service/admobfree.service.service';
import {Platform} from '@ionic/angular';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.page.html',
  styleUrls: ['./banner.page.scss'],
})
export class BannerPage implements OnInit {

  constructor(private admobFreeService: AdmobFreeService,
              private platform: Platform) {
    if (this.platform.is('cordova')) {
      this.showBanner();
    }
  }

  ngOnInit() {
  }
  showBanner(){
    this.admobFreeService.BannerAd();
  }
}
