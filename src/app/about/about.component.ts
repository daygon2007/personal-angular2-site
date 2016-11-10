import { Component, OnInit } from '@angular/core';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { ActivatedRoute, Router } from '@angular/router';
import {SeoService} from '../seo.service';

declare var $: any;

@Component({
  //moduleId: module.id,
  selector: 'app-about',
  templateUrl: 'about.component.html',
  styleUrls: ['about.component.scss'],
})
export class AboutComponent implements OnInit {

  constructor(private router: Router, private seoService: SeoService) {
    seoService.setTitle('My Life as a Front-End Web Developer | Jonathon Harrelson');
    seoService.setMetaDescription('Jonathon Harrelson is a Front-End Web Developer and Search Engine Specialist based out of Houston, Texas.');
    seoService.setMetaRobots('Index, Follow');
  }

  ngOnInit() {
    
    if(this.router.url === '/'){
      $('header').addClass('home-banner');
    }else{
      $('header').removeClass('home-banner');
    }
  }
  goHome(){
    this.router.navigate(['/']);
  }

}
