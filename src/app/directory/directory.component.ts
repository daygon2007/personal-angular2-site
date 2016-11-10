import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FilterPipe } from '../filter.pipe';
import { LoggingService } from '../logging.service';
import { DataService } from '../data.service';
declare var firebase: any;
declare var $: any;

@Component({
  //moduleId: module.id,
  selector: 'app-directory',
  templateUrl: 'directory.component.html',
  styleUrls: ['directory.component.scss'],
  //pipes: [FilterPipe],
  //providers: [DataService]
})
export class DirectoryComponent implements OnInit {
  
  ninjas = [];
  bool = null;
  
  constructor(private logger: LoggingService, private dataService: DataService, private router: Router) { }

    logIt(){
      this.logger.log();
    }
    
  ngOnInit() {
    /*this.dataService.fetchData().subscribe(
            (data) => this.ninjas = data
    );*/
    this.fbGetData();
    
    if(this.router.url === '/'){
      $('header').addClass('home-banner');
    }else{
      $('header').removeClass('home-banner');
    }
    
  }
  
  fbGetData(){
    firebase.database().ref('/portfolio/').on('child_added', (snapshot) => {
      this.ninjas.push(snapshot.val())
    })
  }
  
  fbPostData(name, belt){
    firebase.database().ref('/portfolio/').push({name: name, belt: belt})
  }

}
