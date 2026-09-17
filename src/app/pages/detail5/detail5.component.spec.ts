import { SharedModule } from '../../shared/shared.module';
import { RouterTestingModule } from '@angular/router/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Detail5Component } from './detail5.component';

describe('Detail5Component', () => {
  let component: Detail5Component;
  let fixture: ComponentFixture<Detail5Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [SharedModule, RouterTestingModule],
      declarations: [Detail5Component]
    });
    fixture = TestBed.createComponent(Detail5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
