import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientNameFormComponent } from './client-name-form.component';

describe('ClientNameFormComponent', () => {
  let component: ClientNameFormComponent;
  let fixture: ComponentFixture<ClientNameFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClientNameFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientNameFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
