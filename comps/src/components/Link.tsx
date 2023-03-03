import classNames from 'classnames';
import { useNavigationContext } from '../hooks/use-navigation-context';

interface ILink extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  to: string;
  activeClassName: string;
  children: React.ReactNode;
}

const Link = ({ to, children, className, activeClassName }: ILink) => {
  const { navigate, currentPath } = useNavigationContext();

  const styling = classNames(
    'text-blue-500',
    className,
    currentPath === to && activeClassName
  );

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (e.metaKey || e.ctrlKey) return;
    e.preventDefault();
    navigate(to);
  };

  return (
    <a className={styling} onClick={handleClick} href={to}>
      {children}
    </a>
  );
};

export default Link;
