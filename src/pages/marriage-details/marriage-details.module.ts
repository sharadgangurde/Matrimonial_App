import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MarriageDetailsPage } from './marriage-details';

@NgModule({
  declarations: [
    MarriageDetailsPage,
  ],
  imports: [
    IonicPageModule.forChild(MarriageDetailsPage),
  ],
})
export class MarriageDetailsPageModule {}
