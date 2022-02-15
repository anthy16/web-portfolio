import { Component, Input, OnInit } from '@angular/core';
import { HorizontalPosition } from '@constants/horizontal-position.constants';
import { Project } from '@models/project.model';

@Component({
  selector: 'app-project-description',
  templateUrl: './project-description.component.html',
  styleUrls: ['./project-description.component.scss']
})
export class ProjectDescriptionComponent implements OnInit {
  @Input() project: Project | undefined;
  @Input() imagePosition: HorizontalPosition = HorizontalPosition.LEFT;

  left: HorizontalPosition = HorizontalPosition.LEFT;
  right: HorizontalPosition = HorizontalPosition.RIGHT;

  imageName: string = '';

  ngOnInit(): void {
    if (!this.project) return;

    let projectNameParts = this.project.title.split(' ');

    projectNameParts.map((element, index) => {
      this.imageName += element + (index + 1 === projectNameParts.length ? '' : '_');
    });

    this.imageName += '.jpg';
  }
}
