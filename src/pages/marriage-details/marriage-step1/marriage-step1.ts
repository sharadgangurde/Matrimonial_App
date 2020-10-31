import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { Base64 } from '@ionic-native/base64';
import { Camera } from '@ionic-native/camera';
import { File } from '@ionic-native/file';
import { ImagePicker, ImagePickerOptions } from '@ionic-native/image-picker';
import { ActionSheetController, NavController, NavParams } from 'ionic-angular';
import { SplashProvider } from '../../../providers/splash/splash';
import { MarriageStep2Page } from '../marriage-step2/marriage-step2';


/**
 * Generated class for the MarriageStep1Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

//@IonicPage()
@Component({
  selector: 'page-marriage-step1',
  templateUrl: 'marriage-step1.html',
})
export class MarriageStep1Page {

  dataArray = {};
  marriageForm: FormGroup;
  otherpics: any;
  allImages = [];

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public actionSheetCtrl: ActionSheetController,
    public splash: SplashProvider,
    public sanitizer: DomSanitizer,
    private imagePicker: ImagePicker,
    public base64: Base64,
    public camera: Camera,
    public file: File
    ) {
    this.marriageForm = new FormGroup({
      allImages: new FormControl(),
      fathername: new FormControl('', [Validators.required]),
      fathermobileno: new FormControl('', [Validators.required]),
      fatherOccupation: new FormControl('', [Validators.required]),
      motherOccupation: new FormControl('', [Validators.required])
    })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MarriageStep1Page');
    this.dataArray = this.navParams.get('dataArray');

    console.log('---------------Data at Marriage Step1----------------- ',this.dataArray)
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
      },
      {
        text: 'Camera',
        icon: 'camera',
        cssClass: 'actionSheetButon',
        handler: () => {

          this.takePicture(this.camera.PictureSourceType.CAMERA);
        }
      },]
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
  
  // private convertImageToBase64(base64: string) {
  //   this.splash.presentLoading();
  //   this.base64.encodeFile(base64).then((base64File: string) => {

  //       this.allImages.push(this.sanitizer.bypassSecurityTrustResourceUrl(base64File));
  //       this.splash.dismiss();
 
  //   }, (err) => {
  //     this.splash.dismiss()
  //     console.log(err);
  //   });
  

  submitDetails(data) {
    if(this.marriageForm.valid) {

      this.dataArray['otherpics'] = this.allImages,
      this.dataArray['fathername'] = data.fathername,
      this.dataArray['fatherMobileNo'] = data.fathermobileno,
      this.dataArray['fatherOccupation'] = data.fatherOccupation,
      this.dataArray['motherOccupation'] = data.motherOccupation,

      this.navCtrl.push(MarriageStep2Page, {
        dataArray: this.dataArray
      })
    }
  }
}
