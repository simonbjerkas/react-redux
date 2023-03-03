import { useNavigationContext } from '../hooks/use-navigation-context';

type IRoute = {
  path: string;
  children: React.ReactNode;
};

const Route = ({ path, children }: IRoute) => {
  const { currentPath } = useNavigationContext();
  if (path === currentPath) {
    return <div>{children}</div>;
  }
  return null;
};

export default Route;
