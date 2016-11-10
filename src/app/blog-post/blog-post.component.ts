import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { DataService } from '../data.service';
import { Blog } from '../blog';
import { EllipsisPipe } from '../ellipses.pipe';
import { SpaceHyphenPipe } from '../space-hyphen.pipe';
import { RemoveSpecialCharactersPipe } from '../remove-special-characters.pipe';
import { Tinymce } from '../tinymce.directive';
import { SidebarComponent } from '../sidebar/sidebar.component';
import {SeoService} from '../seo.service';

declare var firebase: any;
declare var $: any;
declare var tinymce: any;

@Component({
  //moduleId: module.id,
  selector: 'app-blog-post',
  templateUrl: 'blog-post.component.html',
  styleUrls: ['blog-post.component.scss'],
  //providers: [DataService],
  //directives: [Tinymce, SidebarComponent],
  //pipes: [EllipsisPipe, SpaceHyphenPipe, RemoveSpecialCharactersPipe]
})
export class BlogPostComponent implements OnInit {
  
  alias: string;
  blog: any;
  blogs = [];
  blogList = [];
  user = firebase.auth().currentUser;
  post: string;
  title: string;
  private isLogged: boolean;

  constructor(
    private dataService: DataService,
    private route: ActivatedRoute,
    private router: Router, private seoService: SeoService) {
      
    }

  ngOnInit() {
    this.fbGetData();
    this.is_logged();
    
    if(this.router.url === '/'){
      $('header').addClass('home-banner');
    }else{
      $('header').removeClass('home-banner');
    }
    this.seoService.setTitle( this.title + ' | Jonathon Harrelson');
    this.seoService.setMetaDescription('Jonathon Harrelson is a Front-End Web Developer and Search Engine Specialist based out of Houston, Texas.');
    this.seoService.setMetaRobots('Index, Follow');
  }
  
  // Get the data first
  fbGetData(){
    firebase.database().ref('/blog/' + this.route.snapshot.params['alias']).on('value', (snapshot) => {
      this.blogs.push(snapshot.val())
      this.title = this.blogs[0].title;
    });
    firebase.database().ref('/blog').on('child_added', (snapshot) => {
      this.blogList.push(snapshot.val())
    });
    //console.log(this.route.snapshot);
  }
  
  // Update The Data
  updatePost(alias, title, content){
    firebase.database().ref('blog/' + this.route.snapshot.params['alias']).update({
      alias: alias,
      title: title,
      content: content,
  }).then(function(){
    $('#myModal').modal('hide');
    $(".blog-post").first().remove();
  });
  //location.reload();
  }
  
  is_logged(){
    if (this.user != null && this.user.emailVerified === true) {
      // User Logged In
      this.isLogged = true;
    } else {
      // No user is signed in.
      this.isLogged = false;
      console.log('No User Logged In');
    }
  }
  gotoBlog(blog: Blog): void {
    this.router.navigate(['/blog/' + blog.alias]);
  }
  goHome(){
    this.router.navigate(['/']);
  }
  goToBlogList(){
    this.router.navigate(['blog']);
  }
}
