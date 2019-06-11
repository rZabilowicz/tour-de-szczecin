import { Component, OnInit } from '@angular/core';
import * as data from '../../data/news.json';
import { News } from '../models/news';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {

  news: News[] = data.news;

  constructor() {}

  ngOnInit() {
  }
}
