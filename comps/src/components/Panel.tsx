import classNames from 'classnames';

interface IPanel extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
}

const Panel = ({ children, className, ...rest }: IPanel) => {
  const styling = classNames(
    'border rounded p-3 shadow bg-white w-full',
    className
  );

  return (
    <div className={styling} {...rest}>
      {children}
    </div>
  );
};

export default Panel;
