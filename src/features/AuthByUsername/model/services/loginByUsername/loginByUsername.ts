import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { User, userAction } from 'entities/User';
import { USER_LOCALSTORAGE_KEY } from 'shared/const/localStorage';

interface LoginByUsernameProps {
  username: string;
  password: string;
}

export const loginByUsername = createAsyncThunk<User, LoginByUsernameProps>(
  'login/loginByUsername',
  async ({ username, password }, thunkApi) => {
    try {
      const response = await axios.post('http://localhost:8000/login', {
        username,
        password,
      });

      if (!response.data) {
        throw new Error();
      }
      localStorage.setItem(USER_LOCALSTORAGE_KEY, JSON.stringify(response.data));
      thunkApi.dispatch(userAction.setAuthData(response.data));

      return response.data;
    } catch (err) {
      // eslint-disable-next-line no-console
      console.log(err);
      return thunkApi.rejectWithValue('Введен не верный логин или пароль');
    }
  },
);
