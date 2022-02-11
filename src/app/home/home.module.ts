import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';
import { AvatarComponent } from './avatar/avatar.component';
import { AboutComponent } from './about/about.component';

@NgModule({
  declarations: [HomeComponent, AvatarComponent, AboutComponent],
  imports: [CommonModule, HomeRoutingModule]
})
export class HomeModule {}
