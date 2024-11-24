import { Component, OnDestroy, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { Observable, Subject, takeUntil } from 'rxjs';
import { TitleService } from './shared/services/title.service';
import { Background } from './shared/models/background.model';
import { Store } from '@ngrx/store';
import { AppState } from './store/state/app.state';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  loading: boolean = true;
  route: string = '';
  background$: Observable<Background | undefined> = this.store.select((state: AppState) => state.layout.background);

  destroy$: Subject<any> = new Subject();

  constructor(private router: Router, private titleService: TitleService, private store: Store<AppState>) {}

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
