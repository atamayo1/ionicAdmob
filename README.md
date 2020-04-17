# Implementing AdMob Free Ionic 4
- i did the functionality of Google Ads implementing AdMob Free in Ionic 4

## First you add the platforms
- ionic cordova platform add android
- ionic cordova platform add ios

## Second you install the plugin 
- ionic cordova plugin add cordova-plugin-admob-free --save --variable ADMOB_APP_ID=YOUR_ANDROID_ADMOB_APP_ID_AS_FOUND_IN_ADMOB

## Third you install on the package with npm
- npm install @ionic-native/admob-free

## Fourth you implement Admob Free on your project
- You need to be sure that you have the play service in the same version in all your project

## Five for ios put the following code in config.xml
- <config-file target="*-Info.plist" parent="GADApplicationIdentifier">
      <string>YOUR_IOS_ADMOB_APP_ID_AS_FOUND_IN_ADMOB</string>
  </config-file>
