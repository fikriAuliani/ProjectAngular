import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailBukuComponent } from './detail-buku.component';

describe('DetailBukuComponent', () => {
  let component: DetailBukuComponent;
  let fixture: ComponentFixture<DetailBukuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailBukuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailBukuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
