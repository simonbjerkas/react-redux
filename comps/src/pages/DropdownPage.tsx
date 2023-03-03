import { useState } from 'react';
import Dropdown, { TDropdown } from '../components/Dropdown';

const DropdownPage = () => {
  const [selection, setSelection] = useState<TDropdown | null>(null);

  const handleSelect = (option: TDropdown): void => setSelection(option);

  const options: TDropdown[] = [
    { label: 'Red', value: 'red' },
    { label: 'Blue', value: 'blue' },
    { label: 'Green', value: 'green' },
  ];

  return (
    <div className="flex">
      <Dropdown options={options} value={selection} onChange={handleSelect} />
    </div>
  );
};

export default DropdownPage;
