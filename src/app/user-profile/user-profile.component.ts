import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

declare var firebase: any;
declare var $: any;

@Component({
  //moduleId: module.id,
  selector: 'app-user-profile',
  templateUrl: 'user-profile.component.html',
  styleUrls: ['user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {

  private user = firebase.auth().currentUser;
  private isLogged: boolean;
  private profile: string;
  name: string;
  email: string;
  image: string;
  
  
  
  constructor(private router: Router) { }

  ngOnInit() {
    this.fbGetUser();
    this.is_logged();
    
    if(this.router.url === '/'){
      $('header').addClass('home-banner');
    }else{
      $('header').removeClass('home-banner');
    }
  }
  
  fbGetUser(){
    
    console.log(this.user);
    //console.log(this.user.displayName);
    
    if (this.user != null) {
      this.user.providerData.forEach(function (profile) {
        /*console.log("Sign-in provider: "+profile.providerId);
        console.log("  Provider-specific UID: "+profile.uid);
        console.log("  Name: "+profile.displayName);
        console.log("  Email: "+profile.email);
        console.log("  Photo URL: "+profile.photoURL);*/
      });
    }
  }
  
  fbUpdateUser(name, email, image){
    this.user.updateProfile({ displayName: name, photoURL: image, email: email}).then(function(profile) {
      
      console.log(name);
      console.log(image);
      console.log(email);
      // Update successful.
      console.log('Updated');
    }, function(error) {
      // An error happened.
      console.log(error.message)
    });
  }
  
  
  // Check if user is logged in
  is_logged(){
    if (this.user != null && this.user.emailVerified === true) {
      // User Logged In
      this.isLogged = true;
      this.name = this.user.displayName;
      this.email = this.user.email;
      this.image = this.user.photoURL;
    } else {
      // No user is signed in.
      this.router.navigate(['/login']);
      this.isLogged = false;
      console.log('No User Logged In');
    }
  }
  
}
