import { SharedModule } from '../../shared/shared.module';
import { RouterTestingModule } from '@angular/router/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Detail4Component } from './detail4.component';

describe('Detail4Component', () => {
  let component: Detail4Component;
  let fixture: ComponentFixture<Detail4Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [SharedModule, RouterTestingModule],
      declarations: [Detail4Component]
    });
    fixture = TestBed.createComponent(Detail4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
