import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

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

  constructor(private router: Router) { }

  ngOnInit() {
  }
  
  onSubmit() {
    this.router.navigateByUrl('/searching?search=Zamek');
  }
}
