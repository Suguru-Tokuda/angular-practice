import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageBtmPublicComponent } from './page-btm-public.component';

describe('PageBtmPublicComponent', () => {
  let component: PageBtmPublicComponent;
  let fixture: ComponentFixture<PageBtmPublicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageBtmPublicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageBtmPublicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
