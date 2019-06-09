import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SearchingComponent } from './searching.component';
import { CategoriesComponent } from './categories/categories.component';
import { ViewComponent } from './view/view.component';
import { QuestionsComponent } from './questions/questions.component';

const searchingRoutes: Routes = [
  {
    path: 'searching',
    component: SearchingComponent,
    children: [
        {
            path: '',
            component: ViewComponent
        },
        {
            path: 'questions',
            component: QuestionsComponent
        }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(searchingRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class SearchingRoutingModule { }