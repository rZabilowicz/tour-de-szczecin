import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-searching',
  templateUrl: './searching.component.html',
  styleUrls: ['./searching.component.scss']
})
export class SearchingComponent implements OnInit {
  categories = false;
  form = new FormGroup({
    search: new FormControl(''),
  });

  constructor(private router: Router) { }

  ngOnInit() {
  }
  
  onSubmit() {
    let object = this.form.get('search').value;
    console.log(object);
    this.router.navigateByUrl('searching?search=' + object );
  }
  
  change() {
    this.categories = !this.categories;
  }

}
