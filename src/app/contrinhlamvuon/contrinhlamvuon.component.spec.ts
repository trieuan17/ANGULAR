import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContrinhlamvuonComponent } from './contrinhlamvuon.component';

describe('ContrinhlamvuonComponent', () => {
  let component: ContrinhlamvuonComponent;
  let fixture: ComponentFixture<ContrinhlamvuonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContrinhlamvuonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContrinhlamvuonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
