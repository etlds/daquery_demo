import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSiteComponent } from './add-site.component';

describe('AddSiteComponent', () => {
  let component: AddSiteComponent;
  let fixture: ComponentFixture<AddSiteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddSiteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddSiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
