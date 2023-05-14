import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OntactComponent } from './ontact.component';

describe('OntactComponent', () => {
  let component: OntactComponent;
  let fixture: ComponentFixture<OntactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OntactComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OntactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
