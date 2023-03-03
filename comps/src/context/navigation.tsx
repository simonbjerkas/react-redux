import { createContext, useEffect, useState } from 'react';

interface INavigationContext {
  currentPath: string;
  navigate(to: string): void;
}

const NavigationContext = createContext<INavigationContext>({
  currentPath: window.location.pathname,
  navigate: function (to: string): void {
    throw new Error('Function not implemented.');
  },
});

interface INavigationProvider {
  children: React.ReactNode;
}

const NavigationProvider = ({ children }: INavigationProvider) => {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  useEffect(() => {
    const handler = () => {
      setCurrentPath(window.location.pathname);
    };

    window.addEventListener('popstate', handler);
    return () => window.removeEventListener('popstate', handler);
  }, []);

  const navigate = (to: string): void => {
    window.history.pushState({}, '', to);
    setCurrentPath(to);
  };

  return (
    <NavigationContext.Provider value={{ currentPath, navigate }}>
      {children}
    </NavigationContext.Provider>
  );
};

export { NavigationProvider };
export default NavigationContext;
