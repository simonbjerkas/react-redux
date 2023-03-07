import Route from './components/Route';
import Sidebar from './components/Sidebar';
import AccordionPage from './pages/AccordionPage';
import ButtonPage from './pages/ButtonPage';
import DropdownPage from './pages/DropdownPage';
import ModalPage from './pages/ModalPage';

const App = () => {
  const pages = [
    { label: 'Dropdown', path: '/' },
    { label: 'Accordion', path: '/accordion' },
    { label: 'Button', path: '/buttons' },
    { label: 'Modal', path: '/modal' },
  ];
  return (
    <div className="container mx-auto mt-4 grid grid-cols-6 gap-4">
      <Sidebar links={pages} />
      <div className="col-span-5">
        <Route path="/">
          <DropdownPage />
        </Route>
        <Route path="/accordion">
          <AccordionPage />
        </Route>
        <Route path="/buttons">
          <ButtonPage />
        </Route>
        <Route path="/modal">
          <ModalPage />
        </Route>
      </div>
    </div>
  );
};

export default App;
