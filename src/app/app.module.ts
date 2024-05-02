import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { initializeApp } from 'firebase/app';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';


export const firebaseConfig = {
  apiKey: "AIzaSyCD43MZ6F8Vr6Sr2PGZg9umLH-s3Do148E",
  authDomain: "empleados-26e8f.firebaseapp.com",
  projectId: "empleados-26e8f",
  storageBucket: "empleados-26e8f.appspot.com",
  messagingSenderId: "276645398549",
  appId: "1:276645398549:web:7957738b007ad9f62d261c"
};

initializeApp(firebaseConfig);

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule, 
    IonicModule.forRoot(), // IonicModule.forRoot({mode:'md'}) 
    AppRoutingModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule
  ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
