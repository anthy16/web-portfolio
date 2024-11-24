import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SettingsModalComponent } from './settings-modal.component';
import { DialogRef } from '@angular/cdk/dialog';
import { Store } from '@ngrx/store';

describe('SettingsModalComponent', () => {
  let component: SettingsModalComponent;
  let fixture: ComponentFixture<SettingsModalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SettingsModalComponent],
      providers: [
        { provide: DialogRef, useValue: {} },
        { provide: Store, useValue: {} }
      ]
    });
    fixture = TestBed.createComponent(SettingsModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
