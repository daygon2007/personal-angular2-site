import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {SeoService} from '../seo.service';

declare var firebase: any;
declare var $: any;

@Component({
  //moduleId: module.id,
  selector: 'app-portfolio',
  templateUrl: 'portfolio.component.html',
  styleUrls: ['portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {
  portfolios = [];

  constructor(private router: Router, private seoService: SeoService) {
    seoService.setTitle('My Front-End Web Development Portfolio | Jonathon Harrelson');
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
  }
  
  fbGetData(){
    firebase.database().ref('/portfolio').on('child_added', (snapshot) => {
      this.portfolios.push(snapshot.val())
    });
  }
  goHome(){
    this.router.navigate(['/']);
  }
}
