import { Component, OnInit } from '@angular/core';
import {AdmobFreeService} from '../service/admobfree.service.service';
import {Platform} from '@ionic/angular';
import {Router} from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage  implements OnInit {

  constructor(
      private admobFreeService: AdmobFreeService,
      private router: Router
  ) {
  }

  ngOnInit() {
  }
  goToShowBanner(){
    this.router.navigate(['/banner'])
  }
  showInterstitial(){
    this.admobFreeService.InterstitialAd();
  }
  showRewardVideo(){
    this.admobFreeService.RewardVideoAd();
  }
}
