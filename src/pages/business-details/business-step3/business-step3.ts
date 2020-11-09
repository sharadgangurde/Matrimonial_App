import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { NavController, NavParams } from 'ionic-angular';
import { GlobalServiceProvider } from '../../../providers/global-service/global-service';
import { ServiceProvider } from '../../../providers/service/service';
import { SplashProvider } from '../../../providers/splash/splash';
import { LoginPage } from '../../login/login';
import { TabsPage } from '../../tabs/tabs';

/**
 * Generated class for the BusinessStep3Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

//@IonicPage()
@Component({
  selector: 'page-business-step3',
  templateUrl: 'business-step3.html',
})
export class BusinessStep3Page {
  businessForm: FormGroup;
  dataArray = {};
  constructor(public navCtrl: NavController, public navParams: NavParams, public api: ServiceProvider,
    public splash: SplashProvider, public global: GlobalServiceProvider) {
    this.businessForm = new FormGroup({
      website: new FormControl(),
      linkedin: new FormControl(),
      facebook: new FormControl(),
      instagram: new FormControl()
    })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BusinessStep3Page');
    this.dataArray = this.navParams.get('dataArray')
    console.log('------- Business Data -------', this.dataArray)
  }

  goBack() {
    this.navCtrl.pop()
  }

  submitDetails(data) {
    if(this.businessForm.valid) {
      this.dataArray['website'] = data.website,
      this.dataArray['linkedin'] = data.linkedin,
      this.dataArray['facebook'] = data.facebook,
      this.dataArray['instagram'] = data.instagram,

      this.splash.presentLoading()
      this.api.registration(this.dataArray).subscribe(res => {
        if(res.flag == 0) {
          this.splash.toast(res.message)  
         // this.global.setUser(res.data)
        } else if(res.status == "true") {
          this.splash.dismiss()
          this.global.setUser(res.userid)
          this.splash.toast(res.message)
          let formdata = new FormData()
          formdata.append('user_id', res.userid)
          this.api.getAccountDetails(formdata).subscribe(res => {
            console.log(res)
            if(res.status == "true") {
              this.global.setUser(res.data.id);
              this.navCtrl.setRoot(TabsPage, {data: res.data})
            }
          })
        } else if(res.flag == 7) {
          this.splash.toast('Registration failed')
          this.navCtrl.setRoot(LoginPage)
        }
      })
    } else {
      console.log('form errr');

      Object.keys(this.businessForm.controls).forEach(field => {
        const control = this.businessForm.get(field);
        control.markAsTouched({ onlySelf: true });
      });
      return;
    }
  }

}
