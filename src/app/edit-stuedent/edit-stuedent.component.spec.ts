import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditStuedentComponent } from './edit-stuedent.component';

describe('EditStuedentComponent', () => {
  let component: EditStuedentComponent;
  let fixture: ComponentFixture<EditStuedentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditStuedentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditStuedentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
