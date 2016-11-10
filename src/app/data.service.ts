import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { Blog } from './blog';
import { LoggedInGuard } from './logged-in.guard';
declare var firebase: any;

@Injectable()
export class DataService {
  
  blog = [];

  private blogUrl = 'https://angular-practice-e52f0.firebaseio.com/blog.json';
  
  private handleError(error: any): Promise<any> {
  console.error('An error occurred', error); // for demo purposes only
  return Promise.reject(error.message || error);
}
  
  constructor(private http: Http) { }


    /*fetchData(){
        return this.http.get('https://angular-practice-e52f0.firebaseio.com/.json').map(
            (res) => res.json()
        );
    }*/
}
