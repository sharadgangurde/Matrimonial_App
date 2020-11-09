import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ModalController, NavController, NavParams } from 'ionic-angular';
import { GlobalServiceProvider } from '../../../providers/global-service/global-service';
import { ServiceProvider } from '../../../providers/service/service';
import { SplashProvider } from '../../../providers/splash/splash';
import { BusinessStep1Page } from '../../business-details/business-step1/business-step1';
import { ChildrensPage } from '../../childrens/childrens';
import { JobDetailsPage } from '../../job-details/job-details';
import { LoginPage } from '../../login/login';
import { TabsPage } from '../../tabs/tabs';

/**
 * Generated class for the DivorcedStep3Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

//@IonicPage()
@Component({
  selector: 'page-divorced-step3',
  templateUrl: 'divorced-step3.html',
})
export class DivorcedStep3Page {

  dataArray = {};
  childrensArray = [];
  modal: any;
  divorcedForm: FormGroup;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public modalCtrl: ModalController, public api: ServiceProvider,
    public global: GlobalServiceProvider,
    public splash: SplashProvider) {
    this.divorcedForm = new FormGroup({
      height: new FormControl(),
      weight: new FormControl(),
      skin: new FormControl(),
      about: new FormControl(),
      noOfChildrens: new FormControl()
    })
  }
  
  ionViewDidLoad() {
    console.log('ionViewDidLoad DivorcedStep3Page');
    this.dataArray = this.navParams.get('dataArray')
    console.log('---------------Divorced form 3 --------', this.dataArray);
  }

  goBack() {
    this.navCtrl.pop()
  }
  
  haveChildrens(value) {
    if(value > 0) {
      this.modal = this.modalCtrl.create(ChildrensPage, {value: value});
      this.modal.onDidDismiss((data) => {
        this.childrensArray = data;
        console.log('---------------Data from modal------------ ', data);
      });
      this.modal.present();
    } else {
      //no action
    }
    
  }

  submitDetails(data) {
    
    if(this.divorcedForm.valid) {
      this.dataArray['height'] = data.height,
      this.dataArray['weight'] = data.weight,
      this.dataArray['skin'] = data.skin,
      this.dataArray['about'] = data.about,
      this.dataArray['totalChildrens'] = data.noOfChildrens,
      this.dataArray['childrens'] = this.childrensArray;
      
      if(this.dataArray['profession'] == 'Job') {
        this.navCtrl.push(JobDetailsPage, {dataArray: this.dataArray})
      } else if(this.dataArray['profession'] == 'Business') {
        this.navCtrl.push(BusinessStep1Page, {dataArray: this.dataArray})
      } else if(this.dataArray['profession'] == 'Unemployed') {
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
      }      
    } else {
      console.log('form errr');

      Object.keys(this.divorcedForm.controls).forEach(field => {
        const control = this.divorcedForm.get(field);
        control.markAsTouched({ onlySelf: true });
      });
      return;
    }
  }
}
