import {
  FC, ReactNode,
  useCallback,
  useEffect, useRef,
  useState,
} from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Portal } from '../Portal/Portal';
import cls from './Modal.module.scss';

interface ModalProps {
  className?: string;
  children?: ReactNode;
  isOpen?: boolean;
  onClose?: () => void;
}

const ANIMATION_DELAY = 300;

export const Modal: FC<ModalProps> = ({
  className, children, isOpen, onClose,
}) => {
  const [isClosing, setIsClosing] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout>>();

  const mods: Record<string, boolean> = {
    [cls.opened]: isOpen,
    [cls.isClosing]: isClosing,
  };

  const closeHandler = useCallback(() => {
    if (onClose) {
      setIsClosing(true);
      timerRef.current = setTimeout(() => {
        onClose();
        setIsClosing(false);
      }, ANIMATION_DELAY);
    }
  }, [onClose]);

  const onContentClick = (evt: React.MouseEvent) => {
    evt.stopPropagation();
  };

  const onKeyDownEsc = (evt: KeyboardEvent) => {
    if (evt.key === 'Escape') {
      closeHandler();
    }
  };

  useEffect(() => {
    const onKeyDownEsc = (evt: KeyboardEvent) => {
      if (evt.key === 'Escape') {
        closeHandler();
      }
    };

    if (isOpen) {
      window.addEventListener('keydown', onKeyDownEsc);
    }

    return () => {
      clearTimeout(timerRef.current);
      window.removeEventListener('keydown', onKeyDownEsc);
    };
  }, [closeHandler, isOpen]);

  return (
    <Portal>
      <div className={classNames(cls.Modal, mods, [className])}>
        <div className={cls.overlay} onClick={closeHandler}>
          <div
            className={classNames(cls.content, { [cls.contentOpened]: isOpen })}
            onClick={onContentClick}
          >
            {children}
          </div>
        </div>
      </div>
    </Portal>
  );
};
