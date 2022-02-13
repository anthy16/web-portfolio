import { Component, OnDestroy, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';
import { TitleService } from './shared/services/title.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  loading: boolean = true;
  route: string = '';

  destroy$: Subject<any> = new Subject();

  constructor(private router: Router, private titleService: TitleService) {}

  ngOnInit(): void {
    this.router.events.pipe(takeUntil(this.destroy$)).subscribe((event) => {
      if (event instanceof NavigationEnd) {
        const currentRouteName = event.urlAfterRedirects.split('/')[1];

        this.route = currentRouteName;
        this.titleService.setPageTitle(currentRouteName);
        this.loading = true;
        setTimeout(() => (this.loading = false), 1000);
      }
    });
  }

  ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.complete();
  }
}
