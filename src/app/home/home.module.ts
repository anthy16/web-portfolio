import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';
import { AvatarComponent } from './avatar/avatar.component';
import { AboutComponent } from './about/about.component';
import { WorkExperienceComponent } from './work-experience/work-experience.component';
import { EducationComponent } from './education/education.component';

@NgModule({
  declarations: [HomeComponent, AvatarComponent, AboutComponent, WorkExperienceComponent, EducationComponent],
  imports: [CommonModule, HomeRoutingModule]
})
export class HomeModule {}
