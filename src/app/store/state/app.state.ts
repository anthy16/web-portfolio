import { initialLayoutState, LayoutState } from './layout.state';

export interface AppState {
  layout: LayoutState;
}

export const initialState: AppState = {
  layout: initialLayoutState
};
