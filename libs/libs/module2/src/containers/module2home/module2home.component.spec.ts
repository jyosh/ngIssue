import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Module2homeComponent } from './module2home.component';

describe('Module2homeComponent', () => {
  let component: Module2homeComponent;
  let fixture: ComponentFixture<Module2homeComponent>;

  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        declarations: [Module2homeComponent]
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(Module2homeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
