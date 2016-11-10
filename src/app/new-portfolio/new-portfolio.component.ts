import { Component, OnInit, Input } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { DataService } from '../data.service';
import { Router } from '@angular/router'
import { EllipsisPipe } from '../ellipses.pipe';
import { SpaceHyphenPipe } from '../space-hyphen.pipe';
import { RemoveSpecialCharactersPipe } from '../remove-special-characters.pipe';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';

declare var firebase: any;
declare var tinymce: any;
declare var $: any;



@Component({
  //moduleId: module.id,
  selector: 'app-new-portfolio',
  templateUrl: 'new-portfolio.component.html',
  styleUrls: ['new-portfolio.component.scss'],
  //providers: [DataService],
  //pipes: [EllipsisPipe, SpaceHyphenPipe, RemoveSpecialCharactersPipe]
})
export class NewPortfolioComponent implements OnInit {
  
  user = firebase.auth().currentUser;
  private isLogged: boolean;
  
  constructor(private data: DataService, private router: Router) { }

  ngOnInit() {
    this.is_logged();
    
    if(this.router.url === '/'){
      $('header').addClass('home-banner');
    }else{
      $('header').removeClass('home-banner');
    }
  }
  
  
  
  fbPostData(title, url, screenShot, content, alias){
    firebase.database().ref('portfolio/' + alias).set({title: title, url: url, screenShot: screenShot, content: content, alias: alias})
    this.router.navigate(['/portfolio']);
  }
  
  is_logged(){
    if (this.user != null && this.user.emailVerified === true) {
      // User Logged In
      this.isLogged = true;
    } else {
      // No user is signed in.
      this.router.navigate(['/login']);
      this.isLogged = false;
      console.log('No User Logged In');
    }
  }
}
