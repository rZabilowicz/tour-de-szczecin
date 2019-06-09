import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import * as data from '../../../data/objects.json';
import { RootObject } from '../../models/objects';
import { Location } from '@angular/common';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss']
})
export class ViewComponent implements OnInit {

  param = '';
  previousParam = '';
  objects: RootObject[] = data.objects;
  items: RootObject[] = [];

  constructor(private route: ActivatedRoute,private location: Location ) { }

  ngOnInit() {
    const search = this.route.snapshot.queryParamMap.get('search');
    if (search === null || search === undefined) {
      this.param = '';
    } else { 
      this.param = search;
    }
    this.selectObjects();

  }

  selectObjects() {
    for (let item of this.objects) {
      if (item.Nazwa.includes(this.param)) {
        this.items.push(item);
      }
    }
  }
}
