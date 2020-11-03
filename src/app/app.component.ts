import { Component } from '@angular/core';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { App, Events, MenuController, Platform } from 'ionic-angular';
import { LoginPage } from '../pages/login/login';
import { TabsPage } from '../pages/tabs/tabs';
import { GlobalServiceProvider } from '../providers/global-service/global-service';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage: any;
  user_id: any;
  constructor(platform: Platform, public events: Events, statusBar: StatusBar, splashScreen: SplashScreen,
    public global: GlobalServiceProvider, public menu: MenuController, public app: App) {
    platform.ready().then(() => {
      statusBar.overlaysWebView(false);
      statusBar.backgroundColorByHexString('#F6F8FB');
      statusBar.styleDefault();
      splashScreen.hide();

      if (window.localStorage.getItem('id')) {
        this.user_id = window.localStorage.getItem('id');
        this.global.setGlobleVariable();
        this.rootPage = TabsPage;
      }
      else {
        window.localStorage.clear();
        //this.rootPage = LoginPage;
         this.rootPage = TabsPage;
      }
    });
  }  
}

