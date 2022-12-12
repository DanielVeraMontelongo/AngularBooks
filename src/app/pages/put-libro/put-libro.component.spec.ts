import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PutLibroComponent } from './put-libro.component';

describe('PutLibroComponent', () => {
  let component: PutLibroComponent;
  let fixture: ComponentFixture<PutLibroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PutLibroComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PutLibroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
