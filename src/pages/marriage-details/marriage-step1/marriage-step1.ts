import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { Base64 } from '@ionic-native/base64';
import { Camera } from '@ionic-native/camera';
import { File, FileEntry } from '@ionic-native/file';
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

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public actionSheetCtrl: ActionSheetController,
    public splash: SplashProvider,
    public sanitizer: DomSanitizer,
    public base64: Base64,
    public camera: Camera,
    public file: File
    ) {
    this.marriageForm = new FormGroup({
      otherpics: new FormControl('', [Validators.required]),
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

      if (side == 'otherpics') {
        this.otherpics = this.sanitizer.bypassSecurityTrustResourceUrl(base64File);
        this.splash.dismiss();
      }
    }, (err) => {
      this.splash.dismiss()
      console.log(err);
    });
  }

  submitDetails(data) {
    if(this.marriageForm.valid) {

      this.dataArray['otherpics'] = 'pending',
      this.dataArray['fathername'] = data.fathername,
      this.dataArray['fatherMobileNo'] = data.fathermobileno,
      this.dataArray['fatherOccupation'] = data.fatherOccupation,
      this.dataArray['motherOccupaion'] = data.motherOccupation,

      this.navCtrl.push(MarriageStep2Page, {
        dataArray: this.dataArray
      })
    }
  }
}
