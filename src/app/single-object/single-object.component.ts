import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import * as data from '../../data/objects.json';
import { RootObject } from '../models/objects';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-single-object',
  templateUrl: './single-object.component.html',
  styleUrls: ['./single-object.component.scss']
})
export class SingleObjectComponent implements OnInit, OnDestroy {
  
  private id: string;
  objects: RootObject[] = data.objects;
  singleObject: RootObject;
  readMore = false;

  comments: Comment[] = [
    {
      user: 'Adam',
      content: 'Świetny obiekt! Osobiście bardzo polecam!'
    },
    {
      user: 'Zosia',
      content: 'Jedno z najlepiej wspominanych miejsc w Szczecinie :) Z chęcią wrócę tam ponownie!'
    },
    {
      user: 'Kasia',
      content: 'Długi spacer oraz uwzglednienie tego obiektu to jest to! Cieszę się, że mogłam odczytać stąd więcej informacji!'
    },
  ];

  form = new FormGroup({
    search: new FormControl(''),
  });

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    console.log(this.id);
    this.singleObject = this.chooseCorrectObject();
    console.log(this.singleObject);
  }
  ngOnDestroy() {
    this.singleObject = null;
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

  onSubmit() {

  }

}

export interface Comment {
  user: string;
  content: string;
}