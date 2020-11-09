import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { Base64 } from '@ionic-native/base64';
import { Camera } from '@ionic-native/camera';
import { File, FileEntry } from '@ionic-native/file';
import { ActionSheetController, AlertController, NavController, NavParams } from 'ionic-angular';
import { ServiceProvider } from '../../../providers/service/service';
import { SplashProvider } from '../../../providers/splash/splash';
import { ValidationMessageProvider } from '../../../providers/validation-message/validation-message';
import { Step2Page } from '../step2/step2';

//@IonicPage()
@Component({
  selector: 'page-step1',
  templateUrl: 'step1.html',
})
export class Step1Page {
  signUpForm: FormGroup;
  email: any;
  languages: any;
  validation_messages: any;
  dataArray = {};
  countries: any;
  fileExtenstion: string;
  base64image: any;
  selfie: any;
  
  constructor(
    public file: File,
    public camera: Camera,
    public base64: Base64,
    public api: ServiceProvider,
    public navParams: NavParams,
    public navCtrl: NavController,
    public splash: SplashProvider,
    public sanitizer: DomSanitizer,
    public alertCtrl: AlertController,
    public actionSheetCtrl: ActionSheetController,
    public validation:  ValidationMessageProvider,  
    ) {
      let EMAILPATTERN = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i;
      this.signUpForm = new FormGroup({
        firstName: new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z ]*')]),
        middleName: new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z ]*')]),
        lastName: new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z ]*')]),
        email: new FormControl('', [Validators.required, Validators.pattern(EMAILPATTERN) ]),
        phone1: new FormControl('', [Validators.required, Validators.maxLength(10), Validators.minLength(10)]),
        phone2: new FormControl('', [Validators.minLength(10), Validators.maxLength(10)]),
        selfie: new FormControl(),
      });
    this.validation_messages = this.validation.validationMessage()
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
    //this.initForm();
    this.email = this.navParams.get('email');

    this.api.getAllCountries().subscribe(res => {
      console.log(res);
     this.countries = res.data;
    })
  }

  // initForm() {
    
  // }
  
  public getPhoto(side) {
    let actionSheet = this.actionSheetCtrl.create({
      buttons: [{
        text: 'File Manager',
        icon: 'folder-open',
        cssClass: 'actionSheetButon',
        handler: () => {
          this.takePicture(this.camera.PictureSourceType.PHOTOLIBRARY, side);
        // this.fileChoose(side)
        }
      },
      {
        text: 'Camera',
        icon: 'camera',
        cssClass: 'actionSheetButon',
        handler: () => {

          this.takePicture(this.camera.PictureSourceType.CAMERA, side);
        }
      },]
    });
    actionSheet.present();
  }
  
  public takePicture(sourceType, side) {
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

  public signUp(data) {
    if (this.signUpForm.valid) {
      this.dataArray['firstname'] = data.firstName,
      this.dataArray['middlename'] = data.middleName,
      this.dataArray['lastname'] = data.lastName,
      this.dataArray['phone1'] = data.phone1,
      this.dataArray['phone2'] = data.phone2,
      this.dataArray['email'] = data.email,
      this.dataArray['photo'] = this.selfie.changingThisBreaksApplicationSecurity,

      this.navCtrl.push(Step2Page, {dataArray: this.dataArray, country: this.countries})
    }
    else {
      console.log('form errr');

      Object.keys(this.signUpForm.controls).forEach(field => {
        const control = this.signUpForm.get(field);
        control.markAsTouched({ onlySelf: true });
      });
      return;
    }
  }

}
