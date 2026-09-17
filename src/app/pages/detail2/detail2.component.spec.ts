import { SharedModule } from '../../shared/shared.module';
import { RouterTestingModule } from '@angular/router/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Detail2Component } from './detail2.component';

describe('Detail2Component', () => {
  let component: Detail2Component;
  let fixture: ComponentFixture<Detail2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [SharedModule, RouterTestingModule],
      declarations: [Detail2Component]
    });
    fixture = TestBed.createComponent(Detail2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
