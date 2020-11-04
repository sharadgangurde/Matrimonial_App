import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { Base64 } from '@ionic-native/base64';
import { Camera } from '@ionic-native/camera';
import { File, FileEntry } from '@ionic-native/file';
import { ImagePicker, ImagePickerOptions } from '@ionic-native/image-picker';
import { ActionSheetController, NavController, NavParams } from 'ionic-angular';
import { SplashProvider } from '../../../providers/splash/splash';
import { ValidationMessageProvider } from '../../../providers/validation-message/validation-message';
import { BusinessStep2Page } from '../business-step2/business-step2';

/**
 * Generated class for the BusinessStep1Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

//@IonicPage()
@Component({
  selector: 'page-business-step1',
  templateUrl: 'business-step1.html',
})
export class BusinessStep1Page {
  
  businessForm: FormGroup;
  dataArray = {};
  allImages = [];
  otherpics: any;
  selfie: any;
  validation_messages: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public imagePicker: ImagePicker,
    public camera: Camera, public actionSheetCtrl: ActionSheetController,
    public sanitizer: DomSanitizer, public splash: SplashProvider, public base64: Base64,
    public validation: ValidationMessageProvider,
    public file: File) {
    this.businessForm = new FormGroup({
      selfie: new FormControl(),
      otherpics_business: new FormControl(),
      company: new FormControl('', [Validators.required]),
      office_address: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required]),
      mobile1: new FormControl('', [Validators.required, Validators.minLength(10), Validators.maxLength(10)]),
      mobile2: new FormControl('', [Validators.minLength(10), Validators.maxLength(10)]),
    });

    this.validation_messages = this.validation.validationMessage()
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BusinessStep1Page');
    this.dataArray = this.navParams.get('dataArray')
  }

  public getPhoto() {
    let actionSheet = this.actionSheetCtrl.create({
      buttons: [{
        text: 'File Manager',
        icon: 'folder-open',
        cssClass: 'actionSheetButon',
        handler: () => {
          this.takePicture(this.camera.PictureSourceType.PHOTOLIBRARY);
        }
      }],
    });
    actionSheet.present();
  }
  
  takePicture(sourceType: number) {
    var options:ImagePickerOptions = {
      maximumImagesCount:3,
      width:100,
      height:100,
    }
      this.imagePicker.getPictures(options).then((results) => {
        for (var i = 0; i < results.length; i++) {
          let filename = results[i].substring(results[i].lastIndexOf('/')+1);
          let path = results[i].substring(0,results[i].lastIndexOf('/')+1);
          this.file.readAsDataURL(path,filename).then((base64string)=>{
            this.allImages.push(base64string)
            console.log('Image URI: ' + results[i]);
          })
        }
      }, (err) => {})
            
  }

  deletePhoto(index){
    this.allImages.splice(index, 1);
 }

 public getLogo(side) {
  let actionSheet = this.actionSheetCtrl.create({
    buttons: [{
      text: 'File Manager',
      icon: 'folder-open',
      cssClass: 'actionSheetButon',
      handler: () => {
        this.selectLogo(this.camera.PictureSourceType.PHOTOLIBRARY, side);
      // this.fileChoose(side)
      }
    }],
  });
  actionSheet.present();
}

public selectLogo(sourceType, side) {
  // Create options for the Camera Dialog
  
  var options = {
    quality: 100,
    sourceType: sourceType,
    saveToPhotoAlbum: true,
    correctOrientation: true,
    DestinationType: this.camera.DestinationType.DATA_URL,
    encodingType: this.camera.EncodingType.JPEG,
    mediaType: this.camera.MediaType.PICTURE,
    maxiImagesCount: 4 // defaults to 1
  };
  this.camera.getPicture(options).then((imagePath) => {
    this.file.resolveLocalFilesystemUrl(imagePath).then(fileInfo => {
      let files = fileInfo as FileEntry;
      files.file(() => {
        // this.fileName = success.name
        this.convertImageToBase64(imagePath, side);

      });
    }, err => {
      console.log(err);
      throw err;
    });
  });
}

private convertImageToBase64(base64: string, side) {
  this.splash.presentLoading();
  this.base64.encodeFile(base64).then((base64File: string) => {

    if (side == 'selfie') {
      this.selfie = this.sanitizer.bypassSecurityTrustResourceUrl(base64File);
      this.splash.dismiss();
    }
  }, (err) => {
    this.splash.dismiss()
    console.log(err);
  });
}
  
  goBack() {
    this.navCtrl.pop()
  }

  submitDetails(data) {
    if(this.businessForm.valid) {
      this.dataArray['otherpics_business'] = this.allImages,
      this.dataArray['company'] = data.company,
      this.dataArray['office_address'] = data.office_address,
      this.dataArray['email'] = data.email,
      this.dataArray['mobile1'] = data.mobile1,
      this.dataArray['mobile2'] = data.mobile2,
      this.dataArray['business_logo'] = this.selfie.changingThisBreaksApplicationSecurity,
      this.navCtrl.push(BusinessStep2Page, {dataArray: this.dataArray})
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
