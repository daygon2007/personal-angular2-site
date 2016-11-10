import { Component, OnInit } from '@angular/core';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { ActivatedRoute, Router } from '@angular/router';
import {SeoService} from '../seo.service';

declare var $: any;
declare var Ls_Form: any;

@Component({
  //moduleId: module.id,
  selector: 'app-contact',
  templateUrl: 'contact.component.html',
  styleUrls: ['contact.component.scss'],
  //directives: [SidebarComponent]
})
export class ContactComponent implements OnInit {
  
  formu5201: any;
  
  
  constructor(private router: Router, private seoService: SeoService) {
    seoService.setTitle('Contact Me | Jonathon Harrelson');
    seoService.setMetaDescription('Jonathon Harrelson is a Front-End Web Developer and Search Engine Specialist based out of Houston, Texas.');
    seoService.setMetaRobots('Index, Follow');
  }

  ngOnInit() {
    
    if(this.router.url === '/'){
      $('header').addClass('home-banner');
    }else{
      $('header').removeClass('home-banner');
    }
    this.formu5201 = new Ls_Form('RWhZZ01nPT0=',document.location.protocol+'//app.leadsius.com','RTFRRCtBPT0=');
  }
  
  goHome(){
    this.router.navigate(['/']);
  }
}
