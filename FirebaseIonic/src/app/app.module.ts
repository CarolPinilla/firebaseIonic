import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { SignupPage} from '../pages/signup/signup';

import {AngularFireModule} from 'angularfire2';
import {AngularFireDatabaseModule} from 'angularfire2/database';
import {AngularFireAuthModule} from 'angularfire2/auth';

import {firebaseConfig} from '../environments/firebase.config';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { Authentication } from '../services/authentication';

import {Uploader} from '../services/files'






@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    SignupPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule,
    AngularFireDatabaseModule

  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    SignupPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Authentication,
    Uploader,

    {provide: ErrorHandler, useClass: IonicErrorHandler}.provide
  ]
})
export class AppModule {}
