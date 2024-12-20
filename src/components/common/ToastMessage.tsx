import { useEffect, useRef, memo } from 'react';
import CheckIcon from '@/assets/check-icon.svg';
import WarningIcon from '@/assets/warning-icon.svg';

interface ToastMessageProps {
  message: string;
  icon: 'check' | 'warning';
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

function ToastMessage({ message, icon, open, setOpen }: ToastMessageProps) {
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (open) {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
      timerRef.current = setTimeout(() => {
        setOpen(false);
        timerRef.current = null;
      }, 1500);
    }

    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
        timerRef.current = null;
      }
    };
  }, [open, setOpen]);

  return (
    <div
      style={{
        transform: open ? 'translateY(0)' : 'translateY(50px)',
        opacity: open ? 1 : 0,
        transition: 'transform 0.25s, opacity 0.25s',
        willChange: 'opacity, transform',
        zIndex: 3,
      }}
      className="flex flex-row px-spacing-05 py-spacing-03 bg-layer-inverse rounded-full transition-opacity justify-between absolute bottom-16"
    >
      <div className="flex flex-row items-center">
        {icon === 'check' && <img src={CheckIcon} />}
        {icon === 'warning' && <img src={WarningIcon} />}
        <span className="pl-2 text-text-on-color body-01-medium">{message}</span>
      </div>
    </div>
  );
}

export default memo(ToastMessage);
