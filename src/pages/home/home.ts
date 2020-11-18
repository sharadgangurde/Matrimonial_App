import { Component } from '@angular/core';
import { App, NavController, NavParams } from 'ionic-angular';
import { GlobalServiceProvider } from '../../providers/global-service/global-service';
import { ServiceProvider } from '../../providers/service/service';
import { SplashProvider } from '../../providers/splash/splash';
import { LoginPage } from '../login/login';
import { NewsDetailsPage } from '../news-details/news-details';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  user_id: any;
  data: any;
  dataArray = []
  newslist: any;
  flag: number;

  constructor(public navCtrl: NavController,
<<<<<<< HEAD
     public navParams: NavParams,  
    public app:App,  public splash: SplashProvider,
    public api: ServiceProvider, public global: GlobalServiceProvider) {
      this.DisplayNewsList();
=======
     public navParams: NavParams,  private splash: SplashProvider,
    public app:App, public api: ServiceProvider, public global: GlobalServiceProvider) {
>>>>>>> 9b89b31da7dbdc8b929590d61dc667f68cc1c3b7
  }

  ionViewWillEnter() {
   
    this.dataArray = this.navParams.get('dataArray')
    console.log('------- All Data --------', this.dataArray)

    if (window.localStorage.getItem('id')) {
      this.user_id = window.localStorage.getItem('id');

      let formdata = new FormData();
      formdata.append('user_id', this.user_id)

    }
  }

<<<<<<< HEAD
  DisplayNewsList() {
      this.splash.presentLoading()
      this.api.getNewsList().subscribe(res => {
        console.log('NewsListPage',res);
        if(res.status == "true") {
          this.splash.dismiss()
          this.newslist = res.data;
        } else {
          this.splash.dismiss()
          this.flag = 0;
        }
        return this.newslist;
      })
    }
  
    newsDetails(id) {
      this.navCtrl.push(NewsDetailsPage,{
        id: id
      })
    }
    
=======
  openPopover() {
    this.splash.presentPopover()
  }
>>>>>>> 9b89b31da7dbdc8b929590d61dc667f68cc1c3b7
  logout() {
    this.global.logout().subscribe(res => {
      console.log(res)
    });
    this.app.getRootNav().setRoot(LoginPage);
    }

}
