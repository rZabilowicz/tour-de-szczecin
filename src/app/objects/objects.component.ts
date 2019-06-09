import { Component, OnInit } from '@angular/core';
import * as data from '../../data/objects.json';
import { RootObject } from '../models/objects';

@Component({
  selector: 'app-objects',
  templateUrl: './objects.component.html',
  styleUrls: ['./objects.component.scss']
})
export class ObjectsComponent implements OnInit {

  objects: RootObject[] = data.objects;

  constructor() {}

  ngOnInit() {
  }

}
