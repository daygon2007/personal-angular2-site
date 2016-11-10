import { HomeComponent } from "./home/home.component";
import { DirectoryComponent } from "./directory/directory.component";
import { CanActivate } from "@angular/router";
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

const APP_ROUTES = [
    
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
    // Unused Paths
    //{ path: 'directory', component: DirectoryComponent },
    //{ path: 'new-blog', component: NewBlogComponent, canActivate: [LoggedInGuard] },
    //{ path: 'user-profile', component: UserProfileComponent, canActivate: [LoggedInGuard] } 


];

export const APP_ROUTES_PROVIDER = [
    //provideRouter(APP_ROUTES)
]