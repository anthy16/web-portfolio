import { createSelector } from '@ngrx/store';
import { AppState } from './state/app.state';
import { LayoutState } from './state/layout.state';

export const selectLayout = (state: AppState) => state.layout;

export const selectBackground = createSelector(selectLayout, (state: LayoutState) => state.background);
