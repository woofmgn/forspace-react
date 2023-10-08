import { memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Loader } from '../Loader/Loader';
import './PageLoader.scss';

interface PageLoaderProps {
  className?: string;
}

export const PageLoader = memo(({ className }: PageLoaderProps) => {
  return (
    <div className={classNames('PageLoader', {}, [className])}>
      <Loader />
    </div>
  );
});
