import { CounterSchema } from '../types/counterSchema';
import { counterAction, counterReducer } from './counterSlice';

describe('counterSlice.test', () => {
  test('', () => {
    const state: CounterSchema = {
      value: 10,
    };

    expect(counterReducer(state, counterAction.decrement())).toEqual({ value: 9 });
  });
  test('', () => {
    const state: CounterSchema = {
      value: 10,
    };

    expect(counterReducer(state, counterAction.increment())).toEqual({ value: 11 });
  });
  test('should work with empty state', () => {
    expect(counterReducer(undefined, counterAction.increment())).toEqual({ value: 1 });
  });
});
