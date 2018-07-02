import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageBtmAdminComponent } from './page-btm-admin.component';

describe('PageBtmAdminComponent', () => {
  let component: PageBtmAdminComponent;
  let fixture: ComponentFixture<PageBtmAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageBtmAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageBtmAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
