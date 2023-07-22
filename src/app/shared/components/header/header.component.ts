import { Dialog } from '@angular/cdk/dialog';
import { Component, Input } from '@angular/core';
import { SettingsModalComponent } from '../../../settings/settings-modal/settings-modal.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  @Input() route: string = '';

  constructor(public dialog: Dialog) {}

  openSettingsDialog(): void {
    const dialogRef = this.dialog.open<string>(SettingsModalComponent, {
      minWidth: '50%'
    });

    dialogRef.closed.subscribe((result) => {
      console.log('The dialog was closed');
    });
  }
}
