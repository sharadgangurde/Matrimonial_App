import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ModalController, NavController, NavParams } from 'ionic-angular';
import { ValidationMessageProvider } from '../../../providers/validation-message/validation-message';
import { BrothersPage } from '../../brothers/brothers';
import { SistersPage } from '../../sisters/sisters';
import { MarriageStep3Page } from '../marriage-step3/marriage-step3';

/**
 * Generated class for the MarriageStep2Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

//@IonicPage()
@Component({
  selector: 'page-marriage-step2',
  templateUrl: 'marriage-step2.html',
})
export class MarriageStep2Page {

  dataArray = {};
  isChecked: any;
  marriageForm: FormGroup;
  brothers: any;
  sisters: any;
  brothersArray = [];
  sistersArray = [];
  modal: any;
  dataFromModal: any;
  validation_messages: any;
  
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public modalCtrl: ModalController,
    public validation: ValidationMessageProvider
    ) {
    this.marriageForm = new FormGroup({
      noOfBrothers: new FormControl('', [Validators.required]),
      noOfSisters: new FormControl('', [Validators.required]),
      manglik: new FormControl('', [Validators.required]),
      kuldevi: new FormControl('', [Validators.required]),
      gotra: new FormControl('', [Validators.required])
    });

    this.validation_messages = this.validation.validationMessage()
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MarriageStep2Page');
    this.dataArray = this.navParams.get('dataArray')
    
    //total Brothers Arary
    this.brothersArray = this.navParams.get('brothersArray');

    //total sisters array
    this.sistersArray  = this.navParams.get('sistersArray');

    console.log('--------------------Data at marriageStep2----------------- ', this.dataArray);

    //let formdata = new FormData()
    //formdata.append('brothers', this.brothersArray[0]);
  }

  goBack() {
    this.navCtrl.pop()
  }

  haveBrothers(value) {
    console.log('------------have Brothers------------', value)
    if(value == 0) {
     // this.navCtrl.push(BrothersPage)
    } else if(value > 0) {
      //this.navCtrl.push(Brother1Page, {data: value})
      this.presentModal(value)
    }
  }

  presentModal(value) {
    this.modal = this.modalCtrl.create(BrothersPage, {value: value});
    this.modal.onDidDismiss((data) => {
      // This is going to be executed when the modal is closed, so
      // you can get the data here
      this.brothersArray = data
      console.log('---------------_Modal from Data------------ ', this.brothersArray);
      
    });
    this.modal.present();
  }

  haveSisters(value) {
    if(value > 0) {
      this.modal = this.modalCtrl.create(SistersPage, {value: value});
      this.modal.onDidDismiss((data) => {
        // This is going to be executed when the modal is closed, so
        // you can get the data here
        this.sistersArray = data;
        console.log('---------------Data from modal------------ ', this.dataFromModal);
        
      });
      this.modal.present();
    } else {
      //No action
    }
    
  }

  submitDetails(data) {
    console.log('-----------data-----------', data);
    if(this.marriageForm.valid) {
      
      this.dataArray['manglik'] = data.manglik,
      this.dataArray['kuldevi'] = data.kuldevi,
      this.dataArray['gotra'] = data.gotra,
      this.dataArray['totalBrothers'] = data.noOfBrothers,
      this.dataArray['totalSisters'] = data.noOfSisters,
      this.dataArray['brothers'] = this.brothersArray,
      this.dataArray['siters'] = this.sistersArray,
      this.navCtrl.push(MarriageStep3Page, {
        dataArray: this.dataArray
      })
    } else {
      console.log('form errr');

      Object.keys(this.marriageForm.controls).forEach(field => {
        const control = this.marriageForm.get(field);
        control.markAsTouched({ onlySelf: true });
      });
      return;
    }
  }

}
