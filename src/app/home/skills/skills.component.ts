import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {
  skills = [
    { title: 'Angular', level: 100 },
    { title: 'React', level: 70 },
    { title: '.NET', level: 80 },
    { title: 'Java', level: 70 },
    { title: 'Git', level: 100 },
    { title: 'JQuery', level: 80 },
    { title: 'GraphQL', level: 60 },
    { title: 'Azure', level: 90 }
  ];

  constructor() {}

  ngOnInit(): void {
    this.skills.sort((a, b) => (a.level < b.level ? 1 : -1));
  }
}
