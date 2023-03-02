import { useEffect, useRef, useState } from 'react';
import { GoChevronDown, GoChevronLeft } from 'react-icons/go';
import Panel from './Panel';

export type TDropdown = {
  label: string;
  value: string;
};

interface IDropdown {
  options: TDropdown[];
  value: TDropdown | null;
  onChange(option: TDropdown): void;
}

const Dropdown = ({ options, value, onChange }: IDropdown) => {
  const [isOpen, setIsOpen] = useState(false);
  const divEl = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = (e: any): void => {
      if (!divEl.current) return;
      if (!divEl.current.contains(e.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('click', handler, true);
    return () => document.removeEventListener('click', handler);
  }, []);

  const handleClick = (): void => {
    setIsOpen((current: boolean): boolean => !current);
  };

  const handleOptionClick = (option: TDropdown): void => {
    setIsOpen(false);
    onChange(option);
  };

  const renderedOptions = options.map((option: TDropdown) => {
    return (
      <div
        className="cursor-pointer rounded p-1 hover:bg-sky-100"
        onClick={() => handleOptionClick(option)}
        key={option.value}
      >
        {option.label}
      </div>
    );
  });

  return (
    <div ref={divEl} className="relative w-48">
      <Panel
        className="flex cursor-pointer items-center justify-between "
        onClick={handleClick}
      >
        {value?.label || 'Select...'}
        {
          <span className="text-lg">
            {isOpen ? <GoChevronDown /> : <GoChevronLeft />}
          </span>
        }
      </Panel>
      {isOpen && <Panel className="absolute top-full">{renderedOptions}</Panel>}
    </div>
  );
};

export default Dropdown;
