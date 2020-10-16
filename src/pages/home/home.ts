import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { GlobalServiceProvider } from '../../providers/global-service/global-service';
import { ServiceProvider } from '../../providers/service/service';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  user_id: any;
  data: any;

  constructor(public navCtrl: NavController, public api: ServiceProvider, public global: GlobalServiceProvider) {

  }

  ionViewWillEnter() {
   
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
    })
    }

}
