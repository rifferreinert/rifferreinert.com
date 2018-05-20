import { Observable } from 'rxjs';
import { filter } from 'rxjs/operators';

import { shouldAlert } from '../selectors/periods';

const getState$ = (store) => {
  return new Observable((observer) => {
    // immediately give current state
    observer.next(store.getState());

    // give state updates
    const unsubscribe = store.subscribe(() => {
      observer.next(store.getState());
    });

    // clean up if observer unsubscribes
    return unsubscribe;
  });
};

export const getTimeUp$ = (store) => {
  return getState$(store).pipe(
    filter((state) => state.periods.last() && shouldAlert(state.periods.last(), state.time)),
  );
}