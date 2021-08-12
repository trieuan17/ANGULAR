import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CongtringlamvuonComponent } from './congtringlamvuon.component';

describe('CongtringlamvuonComponent', () => {
  let component: CongtringlamvuonComponent;
  let fixture: ComponentFixture<CongtringlamvuonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CongtringlamvuonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CongtringlamvuonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
