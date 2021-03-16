import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowCodesComponent } from './show-codes.component';

describe('ShowCodesComponent', () => {
  let component: ShowCodesComponent;
  let fixture: ComponentFixture<ShowCodesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowCodesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowCodesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
