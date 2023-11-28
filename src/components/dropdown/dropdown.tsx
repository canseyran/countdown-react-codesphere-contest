import { useEffect, useRef, useState } from 'react';
import { DropdownOption } from 'src/types/dropdown-option.type';
import CaretDownIcon from '../icons/caret-down';
import useClickedOutside from 'src/hooks/useClickedOutside';

type DropdownProps = {
  selectedOption: DropdownOption;
  options: DropdownOption[];
  onOptionSelected: (option: DropdownOption) => void;
  className: string;
};

export default function Dropdown(props: DropdownProps) {
  const dropdownRef = useRef<HTMLDivElement>(null);
  const { clickedOutside } = useClickedOutside(dropdownRef);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  useEffect(() => {
    if (clickedOutside) {
      setIsOpen(false);
    }
  }, [clickedOutside]);

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
      className={`flex items-center h-8 border border-slate-600 box-border relative bg-slate-900 rounded ${props.className}`}
    >
      <button
        className="flex items-center justify-between text-left h-full text-white w-full"
        style={{ fontFamily: props.selectedOption.fontFamily ?? '' }}
        onClick={handleButtonClick}
      >
        <span className="truncate pl-2">
          {props.selectedOption.label}
        </span>
        <div
          className={` w-7 h-7 grid place-items-center rounded ${
            isOpen
              ? 'bg-slate-700 hover:bg-slate-800'
              : 'bg-slate-800 hover:bg-slate-700'
          }`}
        >
          <CaretDownIcon
            className={`w-5 h-5 ${isOpen && 'rotate-180'}`}
            fill="white"
          />
        </div>
      </button>
      <ul
        className={`z-50 absolute left-0 border border-slate-600 bottom-0 translate-y-[105%] w-full bg-offBlack text-white rounded max-h-[8rem] overflow-y-scroll ${
          !isOpen ? 'hidden' : ''
        }`}
      >
        {props.options.map(option => (
          <li
            className="pl-2 py-2 cursor-pointer hover:bg-slate-900 truncate"
            style={{ fontFamily: option.fontFamily ?? '' }}
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
