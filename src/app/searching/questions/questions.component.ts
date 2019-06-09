import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.scss']
})
export class QuestionsComponent implements OnInit {

  form = new FormGroup({
    transport: new FormControl(''),
    objectType: new FormControl(''),
    age: new FormControl(''),
  });

  constructor() { }

  ngOnInit() {
  }

  onSubmit() {

  }

}
