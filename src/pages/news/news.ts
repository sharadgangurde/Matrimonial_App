import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ServiceProvider } from '../../providers/service/service';
import { SplashProvider } from '../../providers/splash/splash';
import { NewsDetailsPage } from '../news-details/news-details';

/**
 * Generated class for the NewsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

//@IonicPage()
@Component({
  selector: 'page-news',
  templateUrl: 'news.html',
})
export class NewsPage {
  newslist: any;
  flag: number;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public api: ServiceProvider, public splash: SplashProvider) {
    this.DisplayNewsList();
  }
  
  DisplayNewsList() {
  //  this.splash.presentLoading()
    this.api.getNewsList().subscribe(res => {
      console.log('NewsListPage',res);
      if(res.status == "true") {
      //  this.splash.dismiss()
        this.newslist = res.data;
      } else {
      //  this.splash.dismiss()
        this.flag = 0;
      }
      return this.newslist;
    })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NewsPage',this.newslist);
  }

  newsDetails(id) {
    this.navCtrl.push(NewsDetailsPage,{
      id: id
    })
  }

}
