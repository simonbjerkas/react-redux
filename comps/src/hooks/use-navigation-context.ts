import { useContext } from 'react';
import NavigationContext from '../context/navigation';

export const useNavigationContext = () => {
  return useContext(NavigationContext);
};
