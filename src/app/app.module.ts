import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{AngularFireModule} from '@angular/fire';
import { AppComponent } from './app.component';
import { FirebaseService } from './services/firebase.service';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
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
    })
  ],
  providers: [FirebaseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
