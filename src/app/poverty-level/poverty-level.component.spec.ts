import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PovertyLevelComponent } from './poverty-level.component';

describe('PovertyLevelComponent', () => {
  let component: PovertyLevelComponent;
  let fixture: ComponentFixture<PovertyLevelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PovertyLevelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PovertyLevelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
