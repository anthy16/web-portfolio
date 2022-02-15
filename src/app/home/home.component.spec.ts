import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AboutComponent } from './about/about.component';
import { AvatarComponent } from './avatar/avatar.component';
import { EducationComponent } from './education/education.component';

import { HomeComponent } from './home.component';
import { SkillsComponent } from './skills/skills.component';
import { WorkExperienceComponent } from './work-experience/work-experience.component';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        HomeComponent,
        AvatarComponent,
        AboutComponent,
        EducationComponent,
        SkillsComponent,
        WorkExperienceComponent
      ]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
