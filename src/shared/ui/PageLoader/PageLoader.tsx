import { classNames } from 'shared/lib/classNames/classNames';
import { Loader } from '../Loader/Loader';
import './PageLoader.scss';

interface PageLoaderProps {
  className?: string;
}

export const PageLoader = ({ className }: PageLoaderProps) => {
  return (
    <div className={classNames('PageLoader', {}, [className])}>
      <Loader />
    </div>
  );
};
