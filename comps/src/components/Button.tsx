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
  const styling = classNames('flex items-center px-3 py-1.5 border', {
    'border-black': !primary && !secondary && !success && !warning && !danger,

    'border-sky-500': primary,
    'border-gray-600': secondary,
    'border-green-500': success,
    'border-yellow-400': warning,
    'border-red-500': danger,

    'bg-sky-500': primary && !outline,
    'bg-gray-600': secondary && !outline,
    'bg-green-500': success && !outline,
    'bg-yellow-400': warning && !outline,
    'bg-red-500': danger && !outline,
    'bg-white': outline,

    'text-white':
      !outline && (primary || secondary || success || warning || danger),
    'text-sky-500': outline && primary,
    'text-gray-600': outline && secondary,
    'text-green-500': outline && success,
    'text-yellow-400': outline && warning,
    'text-red-500': outline && danger,

    'rounded-full': rounded,
  });
  return (
    <button {...rest} className={styling}>
      {children}
    </button>
  );
};

export default Button;
