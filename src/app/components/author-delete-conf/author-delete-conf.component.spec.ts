import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthorDeleteConfComponent } from './author-delete-conf.component';

describe('AuthorDeleteConfComponent', () => {
  let component: AuthorDeleteConfComponent;
  let fixture: ComponentFixture<AuthorDeleteConfComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuthorDeleteConfComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthorDeleteConfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
