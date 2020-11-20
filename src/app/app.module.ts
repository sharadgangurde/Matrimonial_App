import { HttpClientModule } from '@angular/common/http';
import { ErrorHandler, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { Base64 } from '@ionic-native/base64';
import { Camera } from '@ionic-native/camera';
import { File } from '@ionic-native/file';
import { FileChooser } from '@ionic-native/file-chooser';
import { FilePath } from '@ionic-native/file-path';
import { ImagePicker } from '@ionic-native/image-picker';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { AboutPage } from '../pages/about/about';
import { BrothersPage } from '../pages/brothers/brothers';
import { BusinessDetailsPage } from '../pages/business-details/business-details';
import { BusinessStep1Page } from '../pages/business-details/business-step1/business-step1';
import { BusinessStep2Page } from '../pages/business-details/business-step2/business-step2';
import { BusinessStep3Page } from '../pages/business-details/business-step3/business-step3';
import { BusinessInfoPage } from '../pages/business-info/business-info';
import { BusinessPage } from '../pages/business/business';
import { ChildrensPage } from '../pages/childrens/childrens';
import { ContactPage } from '../pages/contact/contact';
import { DivorcedStep1Page } from '../pages/divorse-details/divorced-step1/divorced-step1';
import { DivorcedStep2Page } from '../pages/divorse-details/divorced-step2/divorced-step2';
import { DivorcedStep3Page } from '../pages/divorse-details/divorced-step3/divorced-step3';
import { DivorseDetailsPage } from '../pages/divorse-details/divorse-details';
import { EditStep1Page } from '../pages/edit-profile/edit-basic-profile/edit-step1/edit-step1';
import { EditStep2Page } from '../pages/edit-profile/edit-basic-profile/edit-step2/edit-step2';
import { EditStep3Page } from '../pages/edit-profile/edit-basic-profile/edit-step3/edit-step3';
import { EditStep4Page } from '../pages/edit-profile/edit-basic-profile/edit-step4/edit-step4';
import { EditBusinessStep1Page } from '../pages/edit-profile/edit-business-profile/edit-business-step1/edit-business-step1';
import { EditBusinessStep2Page } from '../pages/edit-profile/edit-business-profile/edit-business-step2/edit-business-step2';
import { EditBusinessStep3Page } from '../pages/edit-profile/edit-business-profile/edit-business-step3/edit-business-step3';
import { EditBusinessStep4Page } from '../pages/edit-profile/edit-business-profile/edit-business-step4/edit-business-step4';
import { EditMatrimonyStep1Page } from '../pages/edit-profile/edit-matrimony-profile/edit-matrimony-step1/edit-matrimony-step1';
import { EditMatrimonyStep2Page } from '../pages/edit-profile/edit-matrimony-profile/edit-matrimony-step2/edit-matrimony-step2';
import { EditMatrimonyStep3Page } from '../pages/edit-profile/edit-matrimony-profile/edit-matrimony-step3/edit-matrimony-step3';
import { EditMatrimonyStep4Page } from '../pages/edit-profile/edit-matrimony-profile/edit-matrimony-step4/edit-matrimony-step4';
import { HomePage } from '../pages/home/home';
import { JobDetailsPage } from '../pages/job-details/job-details';
import { LoginPage } from '../pages/login/login';
import { MarriageDetailsPage } from '../pages/marriage-details/marriage-details';
import { MarriageStep1Page } from '../pages/marriage-details/marriage-step1/marriage-step1';
import { MarriageStep2Page } from '../pages/marriage-details/marriage-step2/marriage-step2';
import { MarriageStep3Page } from '../pages/marriage-details/marriage-step3/marriage-step3';
import { MatchPage } from '../pages/match/match';
import { MatrimonyDetailsPage } from '../pages/matrimony-details/matrimony-details';
import { MatrimonyPage } from '../pages/matrimony/matrimony';
import { NewsDetailsPage } from '../pages/news-details/news-details';
import { NewsPage } from '../pages/news/news';
import { OtpPage } from '../pages/otp/otp';
import { PopoverPage } from '../pages/popover/popover';
import { ProfilePage } from '../pages/profile/profile';
import { SearchPage } from '../pages/search/search';
import { SignUpPage } from '../pages/sign-up/sign-up';
import { Step1Page } from '../pages/sign-up/step1/step1';
import { Step2Page } from '../pages/sign-up/step2/step2';
import { Step3Page } from '../pages/sign-up/step3/step3';
import { Step4Page } from '../pages/sign-up/step4/step4';
import { SistersPage } from '../pages/sisters/sisters';
import { SliderPage } from '../pages/slider/slider';
import { TabsPage } from '../pages/tabs/tabs';
import { UserPage } from '../pages/user/user';
import { UserInfoPage } from '../pages/user/user-info/user-info';
import { UserListPage } from '../pages/user/user-list/user-list';
import { DefineProvider } from '../providers/define/define';
import { GlobalServiceProvider } from '../providers/global-service/global-service';
import { ServiceProvider } from '../providers/service/service';
import { SplashProvider } from '../providers/splash/splash';
import { UrlProvider } from '../providers/url/url';
import { ValidationMessageProvider } from '../providers/validation-message/validation-message';
import { MyApp } from './app.component';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    LoginPage,
    OtpPage,
    NewsPage,
    MatchPage,
    SliderPage,
    SignUpPage,
    Step1Page,
    Step2Page,
    Step3Page,
    Step4Page,
    BusinessDetailsPage,
    DivorseDetailsPage,
    MarriageDetailsPage,
    BusinessStep1Page,
    BusinessStep2Page,
    BusinessStep3Page,
    JobDetailsPage,
    MarriageStep1Page,
    MarriageStep2Page,
    MarriageStep3Page,
    DivorcedStep1Page,
    DivorcedStep2Page,
    DivorcedStep3Page,
    BrothersPage,
    SistersPage,
    ChildrensPage,
    UserPage,
    UserListPage,
    UserInfoPage,
    NewsDetailsPage,
    MatrimonyPage,
    MatrimonyDetailsPage,
    BusinessPage,
    BusinessInfoPage,
    PopoverPage,
    SearchPage,
    ProfilePage,
    EditStep1Page,
    EditStep2Page,
    EditStep3Page,
    EditStep4Page,
    EditBusinessStep1Page,
    EditBusinessStep2Page,
    EditBusinessStep3Page,
    EditBusinessStep4Page,
    EditMatrimonyStep1Page,
    EditMatrimonyStep2Page,
    EditMatrimonyStep3Page,
    EditMatrimonyStep4Page
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    LoginPage,
    OtpPage,
    NewsPage,
    MatchPage,
    SliderPage,
    SignUpPage,
    Step1Page,
    Step2Page,
    Step3Page,
    Step4Page,
    BusinessStep1Page,
    BusinessStep2Page,
    BusinessStep3Page,
    JobDetailsPage,
    MarriageStep1Page,
    MarriageStep2Page,
    MarriageStep3Page,
    DivorcedStep1Page,
    DivorcedStep2Page,
    DivorcedStep3Page,
    BrothersPage,
    SistersPage,
    BusinessDetailsPage,
    DivorseDetailsPage,
    MarriageDetailsPage,
    ChildrensPage,
    UserPage,
    UserListPage,
    UserInfoPage,
    NewsDetailsPage,
    MatrimonyPage,
    MatrimonyDetailsPage,
    BusinessPage,
    BusinessInfoPage,
    PopoverPage,
    SearchPage,
    ProfilePage,
    EditStep1Page,
    EditStep2Page,
    EditStep3Page,
    EditStep4Page,
    EditBusinessStep1Page,
    EditBusinessStep2Page,
    EditBusinessStep3Page,
    EditBusinessStep4Page,
    EditMatrimonyStep1Page,
    EditMatrimonyStep2Page,
    EditMatrimonyStep3Page,
    EditMatrimonyStep4Page
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    UrlProvider,
    ServiceProvider,
    SplashProvider,
    GlobalServiceProvider,
    DefineProvider,
    ValidationMessageProvider,
    File,
    Camera,
    Base64,
    FileChooser,
    FilePath,
    ImagePicker,
   // EmailComposer
  ]
})
export class AppModule{ }
