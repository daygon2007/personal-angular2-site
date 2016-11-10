import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

//import { HomeComponent } from './home/home.component';
//import { DataService } from './data.service';

declare var firebase: any;
declare var $: any;

@Component({
  //moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  //directives: [HomeComponent],
  //providers: [DataService]
})
export class AppComponent implements OnInit {
  login: string;
  user = firebase.auth().currentUser;
  private isLogged: boolean;
  email: string;
  home: boolean;
  
  constructor(private router: Router){
    
  }
  
  ngOnInit(){
    this.is_logged();
    
    if(this.router.url === '/'){
      $('header').addClass('home-banner');
    }else{
      $('header').removeClass('home-banner');
    }
  }
  
  signOut(){
      firebase.auth().signOut().then(function() {
      // Sign-out successful.
      console.log('Signed Out');
      this.router.navigate(['/']);
    }, function(error) {
      // An error happened.
      console.log(error);
    });
  }
  
  
  
  
  is_logged(){
    if (this.user != null && this.user.emailVerified === true) {
      // User Logged In
      this.isLogged = true;
      this.email = this.user.displayName;
    } else {
      // No user is signed in.
      this.isLogged = false;
      console.log('No User Logged In');
    }
  }
}

