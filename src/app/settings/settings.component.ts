import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {
  
  form = new FormGroup({
    pwd: new FormControl(''),
    pwd2: new FormControl(''),
    pwd3: new FormControl(''),
  });
  
  activePremium = true;
  constructor() { }

  ngOnInit() {
  }

  changePremium() {
    this.activePremium = !this.activePremium;
  }

  onSubmit() {
    
  }

}
