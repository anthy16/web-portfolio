import { Background } from '../../shared/models/background.model';

export interface LayoutState {
  background: Background | undefined;
}

export const initialLayoutState: LayoutState = {
  background: undefined
};
