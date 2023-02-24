import { classNames } from 'shared/lib/classNames/classNames';
import './Loader.scss';

interface LoaderProps {
  className?: string;
}

export const Loader = ({ className }: LoaderProps) => {
  return (
    <div className={classNames('loadingio-spinner-pulse-gbi9tvidf6f', {}, [className])}>
      <div className="ldio-ee5okz85ykm">
        <div />
        <div />
        <div />
      </div>
    </div>
  );
};
