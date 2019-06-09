import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomeComponent } from './home/home.component';
import { MapComponent } from './map/map.component';
import { SearchingComponent } from './searching/searching.component';
import { ObjectsComponent } from './objects/objects.component';
import { YourObjectsComponent } from './your-objects/your-objects.component';
import { NewsComponent } from './news/news.component';
import { SettingsComponent } from './settings/settings.component';
import { SingleObjectComponent } from './single-object/single-object.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'map', component: MapComponent },
  { path: 'objects', component: ObjectsComponent },
  { path: 'your-objects', component: YourObjectsComponent },
  { path: 'news', component: NewsComponent },
  { path: 'settings', component: SettingsComponent },
  { path: 'single-object/:id', component: SingleObjectComponent },
 // { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
