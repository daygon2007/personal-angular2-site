import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import {SeoService} from '../seo.service';
declare var firebase: any;
declare var $: any;
declare var unescape: any;
declare var formu5201: any;
declare var Ls_Form: any;

@Component({
  //moduleId: module.id,
  selector: 'app-home',
  templateUrl: 'home.component.html',
  styleUrls: ['home.component.scss']
})
export class HomeComponent implements OnInit {

  homeTitle = 'Welcome to the Home Page!';
  blogs = [];
  resumes = [];
  portfolios = [];
  formu5201 : any;

  
  constructor(private router: Router, private seoService: SeoService) {
    seoService.setTitle('Front-End Web Developer & Search Engine Specialist | Jonathon Harrelson');
    seoService.setMetaDescription('Jonathon Harrelson is a Front-End Web Developer and Search Engine Specialist based out of Houston, Texas.');
    seoService.setMetaRobots('Index, Follow');
  }
  
  ngOnInit() {
    this.fbGetData();
    if(this.router.url === '/'){
      $('header').addClass('home-banner');
    }else{
      $('header').removeClass('home-banner');
    }
    this.formu5201 = new Ls_Form('RWhZZ01nPT0=',document.location.protocol+'//app.leadsius.com','RTFRRCtBPT0=');
  }
  
  fbGetData(){
    firebase.database().ref('/blog').on('child_added', (snapshot) => {
      this.blogs.push(snapshot.val())
    });
    firebase.database().ref('/resume').on('child_added', (snapshot) => {
      this.resumes.push(snapshot.val())
    });
    firebase.database().ref('/portfolio').on('child_added', (snapshot) => {
      this.portfolios.push(snapshot.val())
    });
  }
}
