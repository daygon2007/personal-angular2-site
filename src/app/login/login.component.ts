import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
declare var firebase: any;
declare var $: any;

@Component({
  //moduleId: module.id,
  selector: 'app-login',
  templateUrl: 'login.component.html',
  styleUrls: ['login.component.scss']
})
export class LoginComponent implements OnInit {

  private user = firebase.auth().currentUser;
  
  private loggedIn: boolean;
  
  constructor(private router: Router) { }

  ngOnInit() {
   this.isLoggedIn(); 
   
   if(this.router.url === '/'){
      $('header').addClass('home-banner');
    }else{
      $('header').removeClass('home-banner');
    }
  }

  signIn(LogInEmail, LogInPassword){
    
    firebase.auth().signInWithEmailAndPassword(LogInEmail, LogInPassword).catch(function(error) {
      // Handle Errors here.
      console.log(error.message);
    });
    // On Successful Login Go Here
    //this.router.navigate(['/new-blog']);
  }
  
  
  
  signUp(email, password){
    // Create The User
    firebase.auth().createUserWithEmailAndPassword(email, password).then(function() {
      // Send The Verification Email
      firebase.auth().currentUser.sendEmailVerification().then(function() {
      // Email sent.
      console.log('Verification Email Sent!')
      }, function(error) {
        // An error happened.
        console.log('An Error Occured: ' + error.message)
      });
      // Console Log New Credentials to test if it worked
      console.log(email);
      console.log(password);
      
      // Sign Out New User
      firebase.auth().signOut().then(function() {
        // Sign-out successful.
        console.log('Signed Out');
      }, function(error) {
        // An error happened.
        console.log(error);
      });
    }, function(error){
      // Handle Errors here.
      console.log(error.code);
      console.log(error.message);
    });
  }

  isLoggedIn() {
    
    //console.log(this.loggedIn, this);
    if (this.user != null && this.user.emailVerified === true) {
      // User is signed in.
      this.loggedIn = true;
      //this.router.navigate(['/new-blog']);
    } else {
      // No user is signed in.
      this.loggedIn = false;
    }
    console.log(this.loggedIn);
    return this.loggedIn;
  }
}
