import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-work-experience',
  templateUrl: './work-experience.component.html',
  styleUrls: ['./work-experience.component.scss']
})
export class WorkExperienceComponent implements OnInit {
  workExperience = [
    {
      title: 'External Consultant - IT Lead',
      company: 'Bankdata',
      description: [
        'As an external consultant at Bankdata, I am assigned as IT lead for an Indian development team working in Angular and Java/Spring.',
        'My tasks include:',
        '- Ensuring that deliverables meet technical requirements',
        '- Making architecture decisions that support business goals',
        '- Handling/helping with impediments',
        '- Ensuring deadlines are met',
        '- Empowering and teaching the team'
      ],
      start: 'september 2021',
      stop: 'present',
      coreTasks: ['Software Development', 'Team Lead'],
      technologies: ['Angular', 'Java', 'Spring Boot', 'Jenkins', 'Git', 'Openshift']
    },
    {
      title: 'Head of Software Development',
      company: 'BlueKey',
      description: [
        'As head of software at BlueKey, I had multiple responsibilities. I managed our in-house development, laid out roadmaps for future development, code reviewed incoming changes and ensured that all implementation upheld technical standards and served our value proposition.',
        'In this role, I have gained leadership experience and learned to combine business goals with technical goals.'
      ],
      start: 'april 2020',
      stop: 'august 2021',
      coreTasks: ['Software Development', 'Team Lead', 'Product Development'],
      technologies: ['Angular', 'C#', '.NET', 'Azure', 'Google Cloud', 'Git', 'DialogFlow', 'Github Actions']
    },
    {
      title: 'Freelance Mobile Developer',
      company: 'Karmarunner',
      description: ['App development in React Native with Expo and GraphQL.'],
      start: 'november 2019',
      stop: 'april 2020',
      coreTasks: ['Mobile Development'],
      technologies: ['React Native', 'GraphQL', 'Mobx']
    },
    {
      title: 'Fullstack Developer',
      company: 'Hesehus A/S',
      description: [
        'At Hesehus I have gained a thorough understanding of both frontend and backend technologies.',
        'This has allowed me to take the role of full stack developer, in which I mostly work with technologies such as React, Node.js and .NET. I have also become accustomed to code reviews, along with CI/CD technologies.'
      ],
      start: 'august 2018',
      stop: 'march 2020',
      coreTasks: ['Software Development'],
      technologies: ['React', 'C#', 'ASP.NET', 'Visual Basic', 'Redis', 'Git', 'JQuery']
    },
    {
      title: 'Frontend Developer',
      company: 'Infowise ApS',
      description: [
        'My work at Infowise consisted of frontend development in the Angular framework. All work was done in close tandem with backend developers, to ensure that both ends communicate the way they should.',
        'Due to the nature of my work at Infowise, I have gotten a strong understanding of technologies such as Angular, TypeScript, HTML, CSS and Git. I have not only learned to use these technologies, but also learned to use them efficiently.'
      ],
      start: 'septemper 2017',
      stop: 'july 2018',
      coreTasks: ['Software development'],
      technologies: ['Angular', 'TypeScript', 'Git']
    }
  ];

  constructor() {}

  ngOnInit(): void {}
}
