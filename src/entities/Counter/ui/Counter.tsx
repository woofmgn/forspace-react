/* eslint-disable i18next/no-literal-string */
import { useDispatch } from 'react-redux';
import { Button } from 'shared/ui/Button/Button';
import { counterAction } from '../model/slice/counterSlice';

export const Counter = () => {
  const dispatch = useDispatch();
  // const counterValue = useSelector((state: StateSchema) => state.counter);

  const increment = () => {
    dispatch(counterAction.increment());
  };

  const decrement = () => {
    dispatch(counterAction.decrement());
  };

  return (
    <div>
      <h1>value = </h1>
      <Button onClick={increment}>
        increment
      </Button>
      <Button onClick={decrement}>
        decrement
      </Button>
    </div>
  );
};
