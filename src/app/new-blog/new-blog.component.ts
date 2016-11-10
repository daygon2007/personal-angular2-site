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
  selector: 'app-new-blog',
  templateUrl: 'new-blog.component.html',
  styleUrls: ['new-blog.component.scss'],
  //providers: [DataService],
  //pipes: [EllipsisPipe, SpaceHyphenPipe, RemoveSpecialCharactersPipe]
})
export class NewBlogComponent implements OnInit {
  @Input()
  title: string;
  user = firebase.auth().currentUser;
  private isLogged: boolean;
  date = Date();
  author = this.user.displayName;
  alias: string;
  image: string;

  constructor(private data: DataService, private router: Router) { }

  ngOnInit() {
    this.is_logged();
    
    /*tinymce.init({
      selector: 'textarea',
      schema: 'html5',
    });*/
    
    if(this.router.url === '/'){
      $('header').addClass('home-banner');
    }else{
      $('header').removeClass('home-banner');
    }
  }
  
  fbPostData(alias, title, content, author, date, image){
    firebase.database().ref('blog/' + alias).set({alias: this.alias, title: title, content: content, author: this.author, date: this.date, image: image })
    this.router.navigate(['/blog/' + alias]);
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
