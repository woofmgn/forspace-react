/* eslint-disable i18next/no-literal-string */
import { useSelector } from 'react-redux';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { Button } from 'shared/ui/Button/Button';
import { getCounterValue } from '../model/selectors/getCounterValue/getCounterValue';
import { counterAction } from '../model/slice/counterSlice';

export const Counter = () => {
  const dispatch = useAppDispatch();
  // const counterValue = useSelector((state: StateSchema) => state.counter);
  const counterValue = useSelector(getCounterValue);

  const increment = () => {
    dispatch(counterAction.increment());
  };

  const decrement = () => {
    dispatch(counterAction.decrement());
  };

  return (
    <div>
      <h1 data-testid="value-title">{`value = ${counterValue}`}</h1>
      <Button data-testid="increment-btn" onClick={increment}>
        increment
      </Button>
      <Button data-testid="decrement-btn" onClick={decrement}>
        decrement
      </Button>
    </div>
  );
};
