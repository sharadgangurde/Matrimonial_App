import { HttpClientModule } from '@angular/common/http';
import { ErrorHandler, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { AboutPage } from '../pages/about/about';
import { Brother1Page } from '../pages/brothers/brother1/brother1';
import { Brother2Page } from '../pages/brothers/brother2/brother2';
import { Brother3Page } from '../pages/brothers/brother3/brother3';
import { Brother4Page } from '../pages/brothers/brother4/brother4';
import { Brother5Page } from '../pages/brothers/brother5/brother5';
import { Brother6Page } from '../pages/brothers/brother6/brother6';
import { BrothersPage } from '../pages/brothers/brothers';
import { BusinessStep1Page } from '../pages/business-details/business-step1/business-step1';
import { BusinessStep2Page } from '../pages/business-details/business-step2/business-step2';
import { BusinessStep3Page } from '../pages/business-details/business-step3/business-step3';
import { ContactPage } from '../pages/contact/contact';
import { DivorcedStep1Page } from '../pages/divorse-details/divorced-step1/divorced-step1';
import { DivorcedStep2Page } from '../pages/divorse-details/divorced-step2/divorced-step2';
import { DivorcedStep3Page } from '../pages/divorse-details/divorced-step3/divorced-step3';
import { HomePage } from '../pages/home/home';
import { JobDetailsPage } from '../pages/job-details/job-details';
import { LoginPage } from '../pages/login/login';
import { MarriageStep1Page } from '../pages/marriage-details/marriage-step1/marriage-step1';
import { MarriageStep2Page } from '../pages/marriage-details/marriage-step2/marriage-step2';
import { MarriageStep3Page } from '../pages/marriage-details/marriage-step3/marriage-step3';
import { MatchPage } from '../pages/match/match';
import { NewsPage } from '../pages/news/news';
import { OtpPage } from '../pages/otp/otp';
import { SignUpPage } from '../pages/sign-up/sign-up';
import { Step1Page } from '../pages/sign-up/step1/step1';
import { Step2Page } from '../pages/sign-up/step2/step2';
import { Step3Page } from '../pages/sign-up/step3/step3';
import { Step4Page } from '../pages/sign-up/step4/step4';
import { Sister1Page } from '../pages/sisters/sister1/sister1';
import { Sister2Page } from '../pages/sisters/sister2/sister2';
import { Sister3Page } from '../pages/sisters/sister3/sister3';
import { Sister4Page } from '../pages/sisters/sister4/sister4';
import { Sister5Page } from '../pages/sisters/sister5/sister5';
import { SistersPage } from '../pages/sisters/sisters';
import { SliderPage } from '../pages/slider/slider';
import { TabsPage } from '../pages/tabs/tabs';
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
    Brother1Page,
    Brother2Page,
    Brother3Page,
    Brother4Page,
    Brother5Page,
    Brother6Page,
    SistersPage,
    Sister1Page,
    Sister2Page,
    Sister3Page,
    Sister4Page,
    Sister5Page
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
    Brother1Page,
    Brother2Page,
    Brother3Page,
    Brother4Page,
    Brother5Page,
    Brother6Page,
    SistersPage,
    Sister1Page,
    Sister2Page,
    Sister3Page,
    Sister4Page,
    Sister5Page

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
  ]
})
export class AppModule{ }
