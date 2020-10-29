import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ModalController, NavController, NavParams } from 'ionic-angular';
import { BusinessStep1Page } from '../../business-details/business-step1/business-step1';
import { ChildrensPage } from '../../childrens/childrens';
import { HomePage } from '../../home/home';
import { JobDetailsPage } from '../../job-details/job-details';

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

  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController) {
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

  haveChildrens(value) {
    this.modal = this.modalCtrl.create(ChildrensPage, {value: value});
    this.modal.onDidDismiss((data) => {
      this.childrensArray = data;
      console.log('---------------Data from modal------------ ', data);
    });
    this.modal.present();
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
      } else {
        this.navCtrl.push(HomePage, {dataArray: this.dataArray})
      }      
    }
  }
}
