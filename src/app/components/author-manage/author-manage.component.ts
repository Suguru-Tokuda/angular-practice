import { Component, OnInit } from '@angular/core';
import { Author } from '.././author/shared/Author';
import { AuthorService } from '.././author/shared/author.service';

@Component({
  selector: 'app-author-manage',
  templateUrl: './author-manage.component.html',
  styleUrls: ['./author-manage.component.css']
})
export class AuthorManageComponent implements OnInit {

  loading: boolean;
  authors: Author[];

  constructor(private authorService: AuthorService) { }

  ngOnInit() {
    this.loading = true;
    this.authors = this.authorService.getAuthors();
  }

  changePageLoadState() {
    this.loading = !this.loading;
  }

}
