import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EdusmithComponent } from './edusmith.component';

describe('EdusmithComponent', () => {
  let component: EdusmithComponent;
  let fixture: ComponentFixture<EdusmithComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EdusmithComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EdusmithComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
