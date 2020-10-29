import { Component } from '@angular/core';
import { App, NavController, NavParams } from 'ionic-angular';
import { GlobalServiceProvider } from '../../providers/global-service/global-service';
import { ServiceProvider } from '../../providers/service/service';
import { LoginPage } from '../login/login';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  user_id: any;
  data: any;
  dataArray = []

  constructor(public navCtrl: NavController,
     public navParams: NavParams,  
    public app:App, 
    public api: ServiceProvider, public global: GlobalServiceProvider) {

  }

  ionViewWillEnter() {
   
    this.dataArray = this.navParams.get('dataArray')
    console.log('------- All Data --------', this.dataArray)

    if (window.localStorage.getItem('id')) {
      this.user_id = window.localStorage.getItem('id');

      let formdata = new FormData();
      formdata.append('user_id', this.user_id)

      this.api.getAccountDetails(formdata).subscribe(res => {
        this.data = res.data;
      })
    }
  }
  logout() {
    this.global.logout().subscribe(res => {
      console.log(res)
    });
    this.app.getRootNav().setRoot(LoginPage);
    }

}
