import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AboutComponent } from './components/about/about.component';
import { AuthorComponent } from './components/author/author.component';
import { AuthorCreateComponent } from './components/author-create/author-create.component';
import { AuthorDeleteConfComponent } from './components/author-delete-conf/author-delete-conf.component';
import { AuthorManageComponent } from './components/author-manage/author-manage.component';
import { BookComponent } from './components/book/book.component';
import { HomeComponent } from './components/home/home.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

const routes: Routes = [
  { path: 'about', component: AboutComponent },
  { path: 'author', component: AuthorComponent,
    children: [
      { path: 'create', component: AuthorCreateComponent },
      { path: 'delete-conf', component: AuthorDeleteConfComponent },
      { path: 'manage', component: AuthorManageComponent }
    ]
  },
  { path: 'about', component: AboutComponent },
  { path: 'book', component: BookComponent },
  { path: '', redirectTo: 'about', pathMatch: 'full' },
  { path: '', component: HomeComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
