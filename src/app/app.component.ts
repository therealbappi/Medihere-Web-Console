import { Component, OnInit } from '@angular/core';
import { error } from 'protractor';
import { FirebaseService } from './services/firebase.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'medihere-web-console';
  isSignedIn = false
  errorMessage = true
  errorMessageText = "Enter details correctly"
  constructor(public firebaseService: FirebaseService) { }
  ngOnInit() {
    if (localStorage.getItem('user') !== null)
      this.isSignedIn = true
    else
      this.isSignedIn = false
  }

  async onSignup(email: string, password: string) {
    //* Sign Up User ----------------------------------------------------------------------------------------------
    await this.firebaseService.signup(email, password)
    if (this.firebaseService.isLoggedIn)
      this.isSignedIn = true
  }
  async onSignin(email: string, password: string) {
    //* Sign In User ----------------------------------------------------------------------------------------------
    if (email !== '' && password !== '') {
      var errorMsg = false;
      await this.firebaseService.signin(email, password)
      .catch(function (error) {
        if (error !== null) {
          errorMsg = true;
        }
        console.log('awdawwwww')
      })

      if (errorMsg) {
        this.errorMessageText = "Wrong username or password";
        this.errorMessage = false;
      }

      if (this.firebaseService.isLoggedIn)
        this.isSignedIn = true
    } else {
      this.errorMessageText = "Enter details correctly";
      this.errorMessage = false;
    }
  }

  handleLogout() {
    //* Logout User ----------------------------------------------------------------------------------------------
    this.isSignedIn = false
  }
}
