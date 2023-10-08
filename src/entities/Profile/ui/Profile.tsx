import { t } from 'i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import {
  DynamicModuleLoader,
  ReducerList,
} from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { profileReducer } from '../model/slice/profileSlice';
import cls from './Profile.module.scss';

const reducers: ReducerList = {
  profile: profileReducer,
};

interface ProfileProps {
  className?: string;
}

export const Profile = ({ className }: ProfileProps) => {
  return (
    <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
      <div className={classNames(cls.Profile, {}, [className])}>
        {t('PROFILE PAGE')}
      </div>
    </DynamicModuleLoader>
  );
};
