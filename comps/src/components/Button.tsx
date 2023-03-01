import classNames from 'classnames';

type TButton = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  children?: React.ReactNode;
  outline?: boolean;
  rounded?: boolean;
} & (
    | {
        primary?: true;
        secondary?: never;
        success?: never;
        danger?: never;
        warning?: never;
      }
    | {
        primary?: never;
        secondary?: true;
        success?: never;
        danger?: never;
        warning?: never;
      }
    | {
        primary?: never;
        secondary?: never;
        success?: true;
        danger?: never;
        warning?: never;
      }
    | {
        primary?: never;
        secondary?: never;
        success?: never;
        danger?: true;
        warning?: never;
      }
    | {
        primary?: never;
        secondary?: never;
        success?: never;
        danger?: never;
        warning?: true;
      }
  );

const Button = ({
  children,
  outline,
  rounded,
  primary,
  secondary,
  success,
  warning,
  danger,
  ...rest
}: TButton) => {
  const styling = classNames(
    rest.className,
    'flex items-center border px-3 py-1.5',
    {
      'border-black': !primary && !secondary && !success && !warning && !danger,
      'border-blue-400 bg-blue-400 text-white': primary,
      'border-slate-400 bg-slate-400 text-white': secondary,
      'border-green-400 bg-green-400 text-white': success,
      'border-yellow-400 bg-yellow-400 text-white': warning,
      'border-red-400 bg-red-400 text-white': danger,
      'rounded-full': rounded,
      'bg-white': outline,
      'text-blue-400': outline && primary,
      'text-slate-400': outline && secondary,
      'text-green-400': outline && success,
      'text-yellow-400': outline && warning,
      'text-red-400': outline && danger,
    }
  );
  return (
    <button {...rest} className={styling}>
      {children}
    </button>
  );
};

export default Button;
