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
  selector: 'app-new-resume',
  templateUrl: 'new-resume.component.html',
  styleUrls: ['new-resume.component.scss'],
  //providers: [DataService],
  //pipes: [EllipsisPipe, SpaceHyphenPipe, RemoveSpecialCharactersPipe]
})
export class NewResumeComponent implements OnInit {
  
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
  
  
  
  fbPostData(monthStart, yearStart, monthEnd, yearEnd, companyName, companyPosition, jobDescription, alias){
    firebase.database().ref('resume/' + alias).set({monthStart: monthStart, yearStart: yearStart, monthEnd: monthEnd, yearEnd: yearEnd, companyName:companyName, companyPosition: companyPosition, jobDescription: jobDescription, alias: alias})
    //this.router.navigate(['/resume/' + alias]);
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
