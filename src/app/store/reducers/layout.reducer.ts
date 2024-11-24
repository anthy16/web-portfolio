import { createReducer, on } from '@ngrx/store';
import { initialLayoutState, LayoutState } from '../state/layout.state';
import { SetBackground } from '../actions/layout.actions';
import { Background } from '../../shared/models/background.model';

export const layoutReducer = createReducer(
  initialLayoutState,
  on(SetBackground, (state: LayoutState, { background }: { background: Background }) => ({
    ...state,
    background: background
  }))
);
