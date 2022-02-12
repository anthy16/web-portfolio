import { Component, OnInit } from '@angular/core';
import { HorizontalPosition } from '../shared/constants/horizontal-position.constants';
import { Project } from '../shared/models/project.model';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  projects: Project[] = [
    {
      src: '/assets/projects/pitlord.png',
      title: 'Pitlord',
      description: [
        'Pitlord is a gladiator management simulator, originally created in GameMaker and later ported to the web. It is a side-project I have been working on for quite a few years at this point, since I started back when I was still in Uni, in 2017.',
        'All code, assets, etc. is made by myself - with a little help from friends on the audio side.',
        'The game has you manage a gladiator school, where you will hire, train and equip gladiators to fight for you.'
      ],
      link: 'https://twitter.com/caverndk'
    },
    {
      src: '/assets/projects/til.png',
      title: 'Today I Learned',
      description: [
        'Today I Learned (TIL) is a compilation of daily learnings from my time coding.',
        'Each learning is briefly explained in text and indexed in the project.'
      ],
      link: 'https://github.com/anthy16/TIL'
    }
  ];
  left: HorizontalPosition = HorizontalPosition.LEFT;
  right: HorizontalPosition = HorizontalPosition.RIGHT;

  constructor() {}

  ngOnInit(): void {}
}
