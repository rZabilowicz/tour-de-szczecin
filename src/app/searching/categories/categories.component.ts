import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {
  
  form = new FormGroup({
    checkbox1: new FormControl(''),
    checkbox2: new FormControl(''),
    checkbox3: new FormControl(''),
    checkbox4: new FormControl(''),
    checkbox5: new FormControl(''),
    checkbox6: new FormControl(''),
  });

  
  constructor() { }

  ngOnInit() {
  }

  onSubmit() {
    
  }

}
