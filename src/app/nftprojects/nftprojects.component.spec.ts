import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NftprojectsComponent } from './nftprojects.component';

describe('NftprojectsComponent', () => {
  let component: NftprojectsComponent;
  let fixture: ComponentFixture<NftprojectsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NftprojectsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NftprojectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
