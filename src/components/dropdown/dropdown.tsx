import { useEffect, useRef, useState } from 'react';
import { DropdownOption } from 'src/types/dropdown-option.type';
import CaretDownIcon from '../icons/caret-down';

type DropdownProps = {
  selectedOption: DropdownOption;
  options: DropdownOption[];
  onOptionSelected: (option: DropdownOption) => void;
  className: string;
};

export default function Dropdown(props: DropdownProps) {
  const dropdownRef = useRef<Node>(null);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  useEffect(() => {
    document.addEventListener('mousedown', handleDocumentClick);
    return () => {
      document.removeEventListener('mousedown', handleDocumentClick);
    };
  }, []);

  function handleDocumentClick(e: MouseEvent) {
    if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
      setIsOpen(false);
    }
  }

  function handleButtonClick() {
    setIsOpen(v => !v);
  }

  function handleOptionClick(option: DropdownOption) {
    setIsOpen(false);
    props.onOptionSelected?.(option);
  }

  return (
    <div
      ref={dropdownRef}
      className={`relative rounded inline-block pl-3 pr-2 ${props.className}`}
    >
      <button
        className="flex items-center justify-between text-left text-white w-full"
        onClick={handleButtonClick}
      >
        {props.selectedOption.label}
        <CaretDownIcon
          className={`w-8 h-8 ${isOpen && 'rotate-180'}`}
          fill="white"
        />
      </button>
      <ul
        className={`z-50 absolute left-0 bottom-0 translate-y-full w-full bg-offBlack text-white rounded max-h-[8rem] overflow-y-scroll ${
          !isOpen && 'hidden'
        }`}
      >
        {props.options.map(option => (
          <li
            className="pl-3 py-2 cursor-pointer hover:bg-darkGrey"
            key={option.value}
            onClick={() => handleOptionClick(option)}
          >
            {option.label}
          </li>
        ))}
      </ul>
    </div>
  );
}
