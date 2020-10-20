import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BrothersPage } from './brothers';

@NgModule({
  declarations: [
    BrothersPage,
  ],
  imports: [
    IonicPageModule.forChild(BrothersPage),
  ],
})
export class BrothersPageModule {}
