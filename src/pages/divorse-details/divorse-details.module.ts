import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DivorseDetailsPage } from './divorse-details';

@NgModule({
  declarations: [
    DivorseDetailsPage,
  ],
  imports: [
    IonicPageModule.forChild(DivorseDetailsPage),
  ],
})
export class DivorseDetailsPageModule {}
