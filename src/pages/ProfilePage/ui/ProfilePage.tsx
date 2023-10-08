import { Profile } from 'entities/Profile/ui/Profile';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './ProfilePage.module.scss';

interface ProfilePageProps {
  className?: string;
}

const ProfilePage = ({ className }: ProfilePageProps) => {
  return (
    <div className={classNames(cls.ProfilePage, {}, [className])}>
      <Profile />
    </div>
  );
};

export default ProfilePage;
