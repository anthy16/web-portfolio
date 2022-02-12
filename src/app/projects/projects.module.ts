import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectsComponent } from './projects.component';
import { ProjectsRoutingModule } from './projects-routing.module';
import { ProjectDescriptionComponent } from './project-description/project-description.component';

@NgModule({
  declarations: [ProjectsComponent, ProjectDescriptionComponent],
  imports: [CommonModule, ProjectsRoutingModule]
})
export class ProjectsModule {}
