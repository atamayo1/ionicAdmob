import { Component, OnInit } from '@angular/core';
import {AdmobFreeService} from '../service/admobfree.service.service';
import {Platform} from '@ionic/angular';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage  implements OnInit {

  constructor(
      private admobFreeService: AdmobFreeService,
      private platform: Platform
  ) {
    if (this.platform.is('cordova')) {
      this.showBanner();
    }
  }

  ngOnInit() {
  }
  showBanner(){
    this.admobFreeService.BannerAd();
  }
  showInterstitial(){
    this.admobFreeService.InterstitialAd();
  }
  showRewardVideo(){
    this.admobFreeService.RewardVideoAd();
  }
}
