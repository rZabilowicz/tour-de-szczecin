import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-searching',
  templateUrl: './searching.component.html',
  styleUrls: ['./searching.component.scss']
})
export class SearchingComponent implements OnInit {
  
  form = new FormGroup({
    search: new FormControl(''),
  });

  constructor() { }

  ngOnInit() {
  }
  
  


}
