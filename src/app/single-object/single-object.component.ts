import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import * as data from '../../data/objects.json';
import { RootObject } from '../models/objects';

@Component({
  selector: 'app-single-object',
  templateUrl: './single-object.component.html',
  styleUrls: ['./single-object.component.scss']
})
export class SingleObjectComponent implements OnInit {
  
  private id: string;
  objects: RootObject[] = data.objects;
  singleObject: RootObject;
  readMore = false;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    console.log(this.id);
    this.singleObject = this.chooseCorrectObject();
    console.log(this.singleObject);
  }

  chooseCorrectObject() {
    for (let item of this.objects) {
      if (item.id === this.id.toString()) {
        return item;
      }
    }
  }

  changeReadMore() {
    this.readMore = !this.readMore;
  }

}
