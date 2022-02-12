import { Component, OnInit } from '@angular/core';
import { CONTACT_EMAIL } from 'src/app/shared/constants/contact.constants';
import { GITHUB, LINKEDIN } from 'src/app/shared/constants/social-media.constants';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  email: string = CONTACT_EMAIL;
  linkedIn: string = LINKEDIN;
  gitHub: string = GITHUB;

  constructor() {}

  ngOnInit(): void {}
}
