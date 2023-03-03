import Link from './Link';

interface ISidebar {
  links: {
    label: string;
    path: string;
  }[];
}

const Sidebar = ({ links }: ISidebar) => {
  const renderedLinks = links.map((link) => {
    return (
      <Link
        activeClassName="font-bold border-l-4 border-blue-500 pl-2"
        className="mb-3"
        key={link.label}
        to={link.path}
      >
        {link.label}
      </Link>
    );
  });

  return (
    <div className="sticky top-0 flex flex-col items-start overflow-y-scroll scrollbar-hide">
      {renderedLinks}
    </div>
  );
};

export default Sidebar;
