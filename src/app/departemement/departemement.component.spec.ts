import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DepartemementComponent } from './departemement.component';

describe('DepartemementComponent', () => {
  let component: DepartemementComponent;
  let fixture: ComponentFixture<DepartemementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DepartemementComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DepartemementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
