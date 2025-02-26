import { useState, useEffect, useRef } from 'react';
import Icon from '@eolluga/eolluga-ui/icon/Icon';

type DropDownProps = {
  items: string[];
  selectedItem: string;
  setItem: (item: string) => void;
  placeholder?: string;
  alert?: string;
  required?: boolean;
};

const DropDown = ({
  items,
  selectedItem,
  setItem,
  placeholder = '',
  alert,
  required,
}: DropDownProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState<string>(selectedItem);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setSelected(selectedItem);
  }, [selectedItem]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside); // 이벤트 리스너 등록
    return () => {
      document.removeEventListener('mousedown', handleClickOutside); // 이벤트 리스너 해제
    };
  }, []);

  const handleSelect = (value: string) => {
    setItem(value);
    setSelected(value);
    setIsOpen(false);
  };

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        className="w-full flex justify-between items-center bg-white border border-gray-300 rounded-md px-4 py-2 text-left shadow-sm focus:outline-none focus:ring-1 focus:ring-gray-400"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>{selected ? items.find((item) => item === selected) : placeholder}</span>
        <Icon
          className="ml-2 h-5 w-5 text-gray-500"
          icon={isOpen ? 'chevron_up_outlined' : 'chevron_down_outlined'}
        />
      </button>
      {isOpen && (
        <div className="absolute z-10 mt-1 w-full bg-white border border-gray-200 rounded-md shadow-lg">
          <ul className="max-h-60 overflow-auto">
            {items.map((item) => (
              <li
                key={item}
                className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                onClick={() => handleSelect(item)}
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      )}
      {required && (
        <div className="mt-2 flex items-center text-red-500 text-sm">
          <Icon icon="warning_triangle_filled" className="mr-2" size={16} />
          {alert}
        </div>
      )}
    </div>
  );
};

export default DropDown;
