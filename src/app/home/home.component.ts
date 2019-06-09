import { Component, OnInit } from '@angular/core';
import * as data from '../../data/objects.json';
import { RootObject } from '../models/objects';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  
  objects: RootObject[] = data.objects;
  
  constructor() { }

  ngOnInit() {
  }

}
