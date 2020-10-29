import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ModalController, NavController, NavParams } from 'ionic-angular';
import { BrothersPage } from '../../brothers/brothers';
import { SistersPage } from '../../sisters/sisters';
import { DivorcedStep3Page } from '../divorced-step3/divorced-step3';

/**
 * Generated class for the DivorcedStep2Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

//@IonicPage()
@Component({
  selector: 'page-divorced-step2',
  templateUrl: 'divorced-step2.html',
})
export class DivorcedStep2Page {

  divorcedForm: FormGroup;
  dataArray = {};
  brothersArray = [];
  sistesArray = [];
  modal: any;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public modalCtrl: ModalController
    ) {
    this.divorcedForm = new FormGroup({
      kuldevi: new FormControl(),
      gotra: new FormControl(),
      manglik: new FormControl(),
      noOfBrothers: new FormControl(),
      noOfSisters: new FormControl()
    })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DivorcedStep2Page');
    this.dataArray = this.navParams.get('dataArray')
  }

  haveBrother(value) {
    this.modal = this.modalCtrl.create(BrothersPage, {value: value});
    this.modal.onDidDismiss((data) => {
      this.brothersArray = data;
      console.log('---------------Data from modal------------ ', data);
    });
    this.modal.present();
  }

  haveSister(value) {
    this.modal = this.modalCtrl.create(SistersPage, {value: value});
    this.modal.onDidDismiss((data) => {
      this.sistesArray = data;
      console.log('---------------Data from modal------------ ', data);
    });
    this.modal.present();
  }

  submitDetails(data) {
    if(this.divorcedForm.valid) {
      this.dataArray['kuldevi'] = data.kuldevi,
      this.dataArray['gotra'] = data.gotra,
      this.dataArray['manglik'] = data.manglik,
      this.dataArray['brothers'] = this.brothersArray,
      this.dataArray['sisters'] = this.sistesArray,

      this.navCtrl.push(DivorcedStep3Page, {
        dataArray: this.dataArray
      });
      
    }
  }
}
