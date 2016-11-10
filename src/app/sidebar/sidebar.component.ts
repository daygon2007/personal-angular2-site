import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Blog } from '../blog';
import { EllipsisPipe } from '../ellipses.pipe';

declare var firebase: any;

@Component({
  //moduleId: module.id,
  selector: 'app-sidebar',
  templateUrl: 'sidebar.component.html',
  styleUrls: ['sidebar.component.scss'],
  //pipes: [EllipsisPipe]
})
export class SidebarComponent implements OnInit {
  
  blogs = [];
  
  
  constructor(private router: Router) { }

  ngOnInit() {
    this.fbGetData();
  }
  
  fbGetData(){
    firebase.database().ref('/blog').on('child_added', (snapshot) => {
      this.blogs.push(snapshot.val())
    })
  }
  gotoBlog(blog: Blog): void {
    this.router.navigate(['/blog/' + blog.alias]);
  }

}
