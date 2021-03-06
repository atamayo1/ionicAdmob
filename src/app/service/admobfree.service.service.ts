import { Injectable } from "@angular/core";
import {
  AdMobFree,
  AdMobFreeBannerConfig,
  AdMobFreeInterstitialConfig,
  AdMobFreeRewardVideoConfig
} from '@ionic-native/admob-free/ngx';
import { Platform } from '@ionic/angular';


@Injectable()
export class AdmobFreeService {

  //Interstitial Ad's Configurations
  interstitialConfig: AdMobFreeInterstitialConfig = {
    // add your config here
    // for the sake of this example we will just use the test config
    //id: "ca-app-pub-3940XXXXXXX42544/6300978111"
    isTesting: true, // Remove in production
    autoShow: false//,
  };

  //Reward Video Ad's Configurations
  RewardVideoConfig: AdMobFreeRewardVideoConfig = {
    //id: "ca-app-pub-3940XXXXXXX42544/6300978111"
    isTesting: true, // Remove in production
    autoShow: false//,
  };
  BannerConfig: AdMobFreeBannerConfig = {
    //id: "ca-app-pub-3940XXXXXXX42544/6300978111"
    isTesting: true,
    autoShow: true,
    size: 'SMART_BANNER'
  };

  constructor(
      private admobFree: AdMobFree,
      public platform: Platform
  ) {

    platform.ready().then(() => {
      // Load ad configuration
      this.admobFree.interstitial.config(this.interstitialConfig);
      //Prepare Ad to Show
      this.admobFree.interstitial.prepare()
          .then(() => {
           //  alert(2);
          }).catch(e => alert(e));


      // Load ad configuration
      this.admobFree.rewardVideo.config(this.RewardVideoConfig);
      //Prepare Ad to Show
      this.admobFree.rewardVideo.prepare()
          .then(() => {
          //  alert(3);
          }).catch(e => alert(e));
    });
    //Handle interstitial's close event to Prepare Ad again
    this.admobFree.on('admob.interstitial.events.CLOSE').subscribe(() => {
      this.admobFree.interstitial.prepare()
          .then(() => {
            alert("Interstitial CLOSE");
          }).catch(e => alert(e));
    });
    //Handle Reward's close event to Prepare Ad again
    this.admobFree.on('admob.rewardvideo.events.CLOSE').subscribe(() => {
      this.admobFree.rewardVideo.prepare()
          .then(() => {
            alert("Reward Video CLOSE");
          }).catch(e => alert(e));
    });
  }


  BannerAd() {
    this.admobFree.banner.config(this.BannerConfig);

    this.admobFree.banner.prepare().then(() => {
      this.admobFree.banner.show();
    }).catch(e => alert(e));
  }

  InterstitialAd() {
    //Check if Ad is loaded
    this.admobFree.interstitial.isReady().then(() => {
      //Will show prepared Ad
      this.admobFree.interstitial.show().then(() => {
      })
          .catch(e => alert("show " + e));
    })
        .catch(e => alert("isReady " + e));
  }

  RewardVideoAd() {
    //Check if Ad is loaded
    this.admobFree.rewardVideo.isReady().then(() => {
      //Will show prepared Ad
      this.admobFree.rewardVideo.show().then(() => {
      })
          .catch(e => alert("show " + e));
    })
        .catch(e => alert("isReady " + e));
  }

}
