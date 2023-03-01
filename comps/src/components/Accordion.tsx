import { useState } from 'react';
import { GoChevronDown, GoChevronLeft } from 'react-icons/go';

export type TAccordion = {
  label: string;
  content: string;
  id: string;
};

interface IAccordion {
  items: TAccordion[];
}

const Accordion = ({ items }: IAccordion) => {
  const [expandedIndex, setExpandedIndex] = useState(-1);

  const handleClick = (nextIdx: number): void => {
    setExpandedIndex((current: number): number => {
      if (nextIdx === current) {
        return -1;
      } else {
        return nextIdx;
      }
    });
  };

  const rederedItems = items.map((item: TAccordion, idx: number) => {
    const isExpanded = idx === expandedIndex;

    return (
      <div key={item.id}>
        <div
          className="flex cursor-pointer items-center justify-between border-b bg-gray-50 p-3"
          onClick={() => handleClick(idx)}
        >
          {item.label}
          {
            <span className="text-2xl">
              {isExpanded ? <GoChevronDown /> : <GoChevronLeft />}
            </span>
          }
        </div>
        {isExpanded && <div className="border-b p-5">{item.content}</div>}
      </div>
    );
  });

  return <div className="rounded border-x border-t">{rederedItems}</div>;
};

export default Accordion;
