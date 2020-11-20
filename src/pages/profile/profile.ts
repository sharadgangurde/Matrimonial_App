import { Component } from '@angular/core';
import { App, NavController, NavParams } from 'ionic-angular';
import { EditStep1Page } from '../edit-profile/edit-basic-profile/edit-step1/edit-step1';

/**
 * Generated class for the ProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

//@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public app: App) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfilePage');
  }
  editProfile() {
    this.app.getRootNav().push(EditStep1Page)
  }

}
