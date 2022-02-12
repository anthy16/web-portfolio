import { Component, OnInit } from '@angular/core';
import { CONTACT_EMAIL } from '../shared/constants/contact.constants';
import { LINKEDIN } from '../shared/constants/social-media.constants';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  email: string = CONTACT_EMAIL;
  linkedIn: string = LINKEDIN;

  constructor() {}

  ngOnInit(): void {}
}
