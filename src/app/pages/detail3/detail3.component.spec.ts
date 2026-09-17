import { SharedModule } from '../../shared/shared.module';
import { RouterTestingModule } from '@angular/router/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Detail3Component } from './detail3.component';

describe('Detail3Component', () => {
  let component: Detail3Component;
  let fixture: ComponentFixture<Detail3Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [SharedModule, RouterTestingModule],
      declarations: [Detail3Component]
    });
    fixture = TestBed.createComponent(Detail3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
