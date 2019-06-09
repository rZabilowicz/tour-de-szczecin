import { NgModule } from '@angular/core';
import { SearchingComponent } from './searching.component';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { CategoriesComponent } from './categories/categories.component';
import { SearchingRoutingModule } from './searching-routing.module';
import { QuestionsComponent } from './questions/questions.component';
import { ViewComponent } from './view/view.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    SearchingRoutingModule
  ],
  declarations: [
    SearchingComponent,
    CategoriesComponent,
    QuestionsComponent,
    ViewComponent,
  ]
})
export class SearchingModule {}