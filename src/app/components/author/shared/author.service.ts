import { Injectable } from '@angular/core';
import { Author } from './Author';

@Injectable({
  providedIn: 'root'
})
export class AuthorService {
  authors: Author[];


  constructor() {
    this.authors = [
      { 
        firstName: 'John', 
        lastName: 'Rambo'
      },
      {
        firstName: 'Eric',
        lastName: 'Clapton'
      },
      {
        firstName: 'Bruce',
        lastName: 'Lee'
      }
    ];
   }

  getAuthors(): Author[] {
    return this.authors;
  }
}
