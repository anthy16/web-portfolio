import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactComponent } from './contact.component';
import { ContactRoutingModule } from './contact-routing.module';
import { MapComponent } from './map/map.component';

@NgModule({
  declarations: [ContactComponent, MapComponent],
  imports: [CommonModule, ContactRoutingModule]
})
export class ContactModule {}
