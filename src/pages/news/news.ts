import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
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

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NewsPage');
  }

  gotoDetails() {
    this.navCtrl.push(NewsDetailsPage)
  }

}
