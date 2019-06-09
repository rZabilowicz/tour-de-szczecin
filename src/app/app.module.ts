import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { SearchingComponent } from './searching/searching.component';
import { MapComponent } from './map/map.component';
import { ObjectsComponent } from './objects/objects.component';
import { YourObjectsComponent } from './your-objects/your-objects.component';
import { NewsComponent } from './news/news.component';
import { SettingsComponent } from './settings/settings.component';
import { HttpClientModule } from '@angular/common/http';
import { SingleObjectComponent } from './single-object/single-object.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SearchingModule } from './searching/searching.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PageNotFoundComponent,
    MapComponent,
    ObjectsComponent,
    YourObjectsComponent,
    NewsComponent,
    SettingsComponent,
    SingleObjectComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    SearchingModule,
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
