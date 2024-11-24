import { DialogRef } from '@angular/cdk/dialog';
import { Component } from '@angular/core';
import { Background } from '../../shared/models/background.model';
import { Store } from '@ngrx/store';
import { AppState } from '../../store/state/app.state';
import { SetBackground } from '../../store/actions/layout.actions';

@Component({
  selector: 'app-settings-modal',
  templateUrl: './settings-modal.component.html',
  styleUrls: ['./settings-modal.component.scss']
})
export class SettingsModalComponent {
  backgrounds: Background[] = [
    { name: '(None)', color: 'var(--background)' },
    { name: 'Bubbles', url: 'assets/backgrounds/bubbles.png' },
    { name: 'Arches', url: 'assets/backgrounds/arches.png' },
    { name: 'Pyramid', url: 'assets/backgrounds/pyramid.png' },
    { name: 'Marble', url: 'assets/backgrounds/marble.png' }
  ];

  activeBackground: Background = this.backgrounds[0];

  constructor(public dialogRef: DialogRef<string>, private store: Store<AppState>) {}

  setActiveBackground(background: Background): void {
    this.activeBackground = background;
  }

  confirmBackground(): void {
    this.store.dispatch(SetBackground({ background: this.activeBackground }));

    this.close();
  }

  close(): void {
    this.dialogRef.close();
  }
}
