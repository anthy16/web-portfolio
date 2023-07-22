import { DialogRef } from '@angular/cdk/dialog';
import { Component } from '@angular/core';
import { Background } from '../../shared/models/background.model';

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

  constructor(public dialogRef: DialogRef<string>) {}

  setActiveBackground(background: Background): void {
    this.activeBackground = background;
  }

  close(): void {
    this.dialogRef.close();
  }
}
