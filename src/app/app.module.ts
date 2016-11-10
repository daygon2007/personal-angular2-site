import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule }   from '@angular/router';

import { AppComponent } from './app.component';
import { Title } from '@angular/platform-browser';
import { DataService } from './data.service';
import {SeoService} from './seo.service';

// Components
import { SidebarComponent } from './sidebar/sidebar.component';
import { BlogListComponent } from './blog-list/blog-list.component';
import { BlogPostComponent } from './blog-post/blog-post.component';
import { LoginComponent } from './login/login.component';
import { NewBlogComponent } from './new-blog/new-blog.component';
import { LoggedInGuard } from './logged-in.guard';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { NewPortfolioComponent } from './new-portfolio/new-portfolio.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { NewResumeComponent } from './new-resume/new-resume.component';
import { HomeComponent } from "./home/home.component";
import { DirectoryComponent } from "./directory/directory.component";

// Pipes
import { EllipsisPipe } from './ellipses.pipe';
import { SpaceHyphenPipe } from './space-hyphen.pipe';
import { RemoveSpecialCharactersPipe } from './remove-special-characters.pipe';
import { FilterPipe } from './filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    EllipsisPipe,
    SpaceHyphenPipe,
    RemoveSpecialCharactersPipe,
    FilterPipe,
    BlogListComponent,
    BlogPostComponent,
    LoginComponent,
    NewBlogComponent,
    UserProfileComponent,
    PortfolioComponent,
    NewPortfolioComponent,
    AboutComponent,
    ContactComponent,
    NewResumeComponent,
    HomeComponent,
    DirectoryComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      // Home
    { path: '', component: HomeComponent },
    
    // Blog
    { path: 'blog', component: BlogListComponent },
    { path: 'blog/:alias', component: BlogPostComponent },
    { path: 'new-blog', component: NewBlogComponent },
    
    // Portfolio
    { path: 'portfolio', component: PortfolioComponent },
    //{ path: 'portfolio/:alias', component: BlogPostComponent },
    { path: 'new-portfolio', component: NewPortfolioComponent },
    
    // About
    { path: 'about', component: AboutComponent },
    
    // Contact
    { path: 'contact', component: ContactComponent },
    
    // User Stuff
    { path: 'login', component: LoginComponent }, 
    { path: 'user-profile', component: UserProfileComponent },
    
    // Resume stuff
    { path: 'resume', component: NewResumeComponent },
    ])
  ],
  exports: [
    RouterModule
  ],
  providers: [
    Title,
    SeoService,
    DataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
