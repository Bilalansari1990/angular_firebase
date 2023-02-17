import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListStuedentComponent } from './list-stuedent.component';

describe('ListStuedentComponent', () => {
  let component: ListStuedentComponent;
  let fixture: ComponentFixture<ListStuedentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListStuedentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListStuedentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
