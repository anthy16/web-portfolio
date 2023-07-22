import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SettingsModalComponent } from './settings-modal/settings-modal.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [SettingsModalComponent],
  imports: [CommonModule, SharedModule]
})
export class SettingsModule {}
