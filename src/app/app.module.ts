import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{AngularFireModule} from '@angular/fire';
import { AppComponent } from './app.component';
import { FirebaseService } from './services/firebase.service';
import { HomeComponent } from './home/home.component';
import { MainNavComponent } from './main-nav/main-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MainNavComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp({
      apiKey: "AIzaSyAFJlV3QIUJfpg-8xWgC3VJJRI0Qdt9szw",
      authDomain: "medihere-f0428.firebaseapp.com",
      databaseURL: "https://medihere-f0428.firebaseio.com",
      projectId: "medihere-f0428", 
      storageBucket: "medihere-f0428.appspot.com",
      messagingSenderId: "107884691371",
      appId: "1:107884691371:web:68c4ad70fc2ec6c1b31cee",
      measurementId: "G-FV67FH1TSF"
    }),
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    BrowserAnimationsModule
  ],
  providers: [FirebaseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
