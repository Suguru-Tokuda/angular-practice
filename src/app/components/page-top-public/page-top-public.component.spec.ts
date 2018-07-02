import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageTopPublicComponent } from './page-top-public.component';

describe('PageTopPublicComponent', () => {
  let component: PageTopPublicComponent;
  let fixture: ComponentFixture<PageTopPublicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageTopPublicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageTopPublicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
