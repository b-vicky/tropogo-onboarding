import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InstitueDetailsComponent } from './institue-details.component';

describe('InstitueDetailsComponent', () => {
  let component: InstitueDetailsComponent;
  let fixture: ComponentFixture<InstitueDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InstitueDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InstitueDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
