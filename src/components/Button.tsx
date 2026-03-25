import clsx from 'clsx';
import { FunctionComponent, ReactNode } from 'react';

export enum ButtonType {
  Button = 'Button',
  Submit = 'Submit',
}

interface Props {
  children: ReactNode;
  disabled?: boolean;
  className?: string;
  onClick: () => void;
  type?: ButtonType;
}


const Button: FunctionComponent<Props> = ({
  children,
  type = ButtonType.Button,
  className,
  disabled,
  onClick,
}) => {
  return (
    <button
      type={type === ButtonType.Submit ? 'submit' : 'button'}
      style={{ pointerEvents: disabled ? 'none' : undefined }}
      className={clsx(className, 'bg-primary-weblink text-white text-small px-4 py-2 rounded-5')}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
