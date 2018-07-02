import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageTopAdminComponent } from './page-top-admin.component';

describe('PageTopAdminComponent', () => {
  let component: PageTopAdminComponent;
  let fixture: ComponentFixture<PageTopAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageTopAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageTopAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
