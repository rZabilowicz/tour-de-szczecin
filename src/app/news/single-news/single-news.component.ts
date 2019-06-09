import { Component, OnInit } from '@angular/core';
import { News } from 'src/app/models/news';
import * as data from '../../../data/news.json';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-single-news',
  templateUrl: './single-news.component.html',
  styleUrls: ['./single-news.component.scss']
})
export class SingleNewsComponent implements OnInit {

  private id: string;
  objects: News[] = data.news;
  singleNews: News;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    this.singleNews = this.chooseCorrectObject();
  }

  chooseCorrectObject() {
    for (let item of this.objects) {
      if (item.id === this.id.toString()) {
        return item;
      }
    }
  }

}
