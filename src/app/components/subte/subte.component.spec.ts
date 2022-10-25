import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubteComponent } from './subte.component';

describe('SubteComponent', () => {
  let component: SubteComponent;
  let fixture: ComponentFixture<SubteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
