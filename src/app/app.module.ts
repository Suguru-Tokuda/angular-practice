import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { BookComponent } from './components/book/book.component';
import { AuthorComponent } from './components/author/author.component';
import { BooksComponent } from './components/books/books.component';
import { AppRoutingModule } from './/app-routing.module';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { AuthorCreateComponent } from './components/author-create/author-create.component';
import { AuthorDeleteConfComponent } from './components/author-delete-conf/author-delete-conf.component';
import { AuthorManageComponent } from './components/author-manage/author-manage.component';
import { PageTopAdminComponent } from './components/page-top-admin/page-top-admin.component';
import { PageBtmAdminComponent } from './components/page-btm-admin/page-btm-admin.component';
import { PageBtmPublicComponent } from './components/page-btm-public/page-btm-public.component';
import { PageTopPublicComponent } from './components/page-top-public/page-top-public.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    BookComponent,
    AuthorComponent,
    BooksComponent,
    PageNotFoundComponent,
    AuthorCreateComponent,
    AuthorDeleteConfComponent,
    AuthorManageComponent,
    PageTopAdminComponent,
    PageBtmAdminComponent,
    PageBtmPublicComponent,
    PageTopPublicComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
