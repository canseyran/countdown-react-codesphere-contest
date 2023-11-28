import {
  ChangeEvent,
  FormEvent,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
import CaretDownIcon from 'src/components/icons/caret-down';
import useClickedOutside from 'src/hooks/useClickedOutside';

type ToolSizePickerProps = {
  value: number;
  onChange: (size: number) => void;
  minValue?: number;
  maxValue?: number;
  steps?: number;
};

export default function ToolSizePicker(props: ToolSizePickerProps) {
  const minValue = props.minValue ?? 1;
  const maxValue = props.maxValue ?? 100;
  const steps = props.steps ?? 4;

  const [size, setSize] = useState<string>(props.value.toString());
  const [previousSize, setPreviousSize] = useState<string>(
    props.value.toString(),
  );
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const sizePickerRef = useRef<HTMLDivElement>(null);
  const { clickedOutside } = useClickedOutside(sizePickerRef);

  useEffect(() => {
    if (clickedOutside) {
      setIsOpen(false);
    }
  }, [clickedOutside]);

  const dropdownOptions = useMemo(() => {
    return Array.from(
      { length: Math.floor((maxValue - minValue) / steps) + 1 },
      (_, index) => minValue + index * steps,
    ).map(v => {
      return {
        value: v.toString(),
        label: v.toString(),
      };
    });
  }, [minValue, maxValue, steps]);

  function handleChangeSize(event: ChangeEvent<HTMLInputElement>) {
    const num = Number(event.target.value);
    if (isNaN(num)) {
      setSize('');
    } else {
      setSize(num.toString());
    }
  }

  function handleSelectSize(size: string) {
    setSize(size);
    setIsOpen(false);
    props.onChange(Number(size));
  }

  function toggleIsOpen(): void {
    setIsOpen(open => !open);
  }

  function handleSubmit(event?: FormEvent<HTMLFormElement>) {
    if (event) {
      event.preventDefault();
    }
    const num = Number(size);
    if (isNaN(num) || num < minValue || num > maxValue) {
      setSize(previousSize);
    } else {
      props.onChange(num);
      setPreviousSize(num.toString());
    }
  }

  return (
    <div
      className="relative flex justify-between items-center bg-slate-900 border border-slate-600 rounded h-8 w-24"
      ref={sizePickerRef}
    >
      <div className="pl-2">
        <form onSubmit={handleSubmit}>
          <input
            className="bg-transparent w-full outline-none remove-arrow text-white"
            onChange={handleChangeSize}
            value={size}
            onBlur={() => handleSubmit()}
          />
        </form>
      </div>
      <div
        className={`w-7 h-7 aspect-square grid place-items-center rounded ${
          isOpen
            ? 'bg-slate-700 hover:bg-slate-800'
            : 'bg-slate-800 hover:bg-slate-700'
        }`}
        onClick={toggleIsOpen}
      >
        <CaretDownIcon
          className={`w-5 h-5 ${isOpen && 'rotate-180'}`}
          fill="white"
        />
      </div>
      <ul
        className={`z-50 absolute left-0 border border-slate-600 bottom-0 translate-y-[105%] w-full bg-offBlack text-white rounded max-h-[8rem] overflow-y-scroll ${
          !isOpen ? 'hidden' : ''
        }`}
      >
        {dropdownOptions.map(option => (
          <li
            className="pl-2 py-2 cursor-pointer hover:bg-slate-900 truncate"
            key={option.value}
            onClick={() => handleSelectSize(option.value)}
          >
            {option.label}
          </li>
        ))}
      </ul>
    </div>
  );
}
