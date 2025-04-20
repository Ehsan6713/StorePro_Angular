import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcountLoginComponent } from './acount-login.component';

describe('AcountLoginComponent', () => {
  let component: AcountLoginComponent;
  let fixture: ComponentFixture<AcountLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AcountLoginComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AcountLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
