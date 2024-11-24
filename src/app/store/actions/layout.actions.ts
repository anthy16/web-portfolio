import { createAction, props } from '@ngrx/store';
import { Background } from '../../shared/models/background.model';

enum LayoutActions {
  SetBackround = '[Layout] Set Background'
}

export const SetBackground = createAction(LayoutActions.SetBackround, props<{ background: Background }>());
