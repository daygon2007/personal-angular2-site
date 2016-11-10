import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FilterPipe } from '../filter.pipe';
import { LoggingService } from '../logging.service';
import { DataService } from '../data.service';
declare var firebase: any;

@Component({
  moduleId: module.id,
  selector: 'app-single-ninja',
  templateUrl: 'single-ninja.component.html',
  styleUrls: ['single-ninja.component.scss']
})
export class SingleNinjaComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
