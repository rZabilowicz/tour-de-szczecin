import { Component, OnInit } from '@angular/core';
import * as data from '../../data/objects.json';
import { RootObject } from '../models/objects';

@Component({
  selector: 'app-your-objects',
  templateUrl: './your-objects.component.html',
  styleUrls: ['./your-objects.component.scss']
})
export class YourObjectsComponent implements OnInit {

  objects: RootObject[] = data.objects;

  constructor() { }

  ngOnInit() {
  }

}
