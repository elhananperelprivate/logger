import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SimulateErrorComponent } from './simulate-error.component';

describe('SimulateErrorComponent', () => {
  let component: SimulateErrorComponent;
  let fixture: ComponentFixture<SimulateErrorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SimulateErrorComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SimulateErrorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
