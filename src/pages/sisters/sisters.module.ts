import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SistersPage } from './sisters';

@NgModule({
  declarations: [
    SistersPage,
  ],
  imports: [
    IonicPageModule.forChild(SistersPage),
  ],
})
export class SistersPageModule {}
