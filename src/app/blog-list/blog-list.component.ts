import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LoggingService } from '../logging.service';
import { DataService } from '../data.service';
import { EllipsisPipe } from '../ellipses.pipe';
import { SpaceHyphenPipe } from '../space-hyphen.pipe';
import { RemoveSpecialCharactersPipe } from '../remove-special-characters.pipe';
import { Blog } from '../blog';
import { SidebarComponent } from '../sidebar/sidebar.component';
import {SeoService} from '../seo.service';

declare var firebase: any;
declare var $: any;


@Component({
  //moduleId: module.id,
  selector: 'app-blog-list',
  templateUrl: 'blog-list.component.html',
  styleUrls: ['blog-list.component.scss'],
  //providers: [DataService],
  //pipes: [EllipsisPipe, SpaceHyphenPipe, RemoveSpecialCharactersPipe],
  //directives: [SidebarComponent]
})
export class BlogListComponent implements OnInit {
    blogs = [];

  constructor(private dataService: DataService, private router: Router, private seoService: SeoService) {
    seoService.setTitle('My Web Development Blog | Jonathon Harrelson');
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
    firebase.database().ref('/blog').on('child_added', (snapshot) => {
      this.blogs.push(snapshot.val())
    })
  }
 
  
  fbPostData(alias, title, content){
    firebase.database().ref('blog/' + alias).set({ alias: alias, title: title, content: content })
    
  }
  
  gotoBlog(blog: Blog): void {
    this.router.navigate(['/blog/' + blog.alias]);
  }
  goHome(){
    this.router.navigate(['/']);
  }
}
