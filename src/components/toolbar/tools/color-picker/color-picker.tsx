import { ChangeEvent, useState } from 'react';
import CaretDownIcon from 'src/components/icons/caret-down';
import { HexColor } from 'src/types/hex-color.type';
import classes from './color-picker.module.css';

type ToolColorPickerProps = {
  value?: HexColor;
  onChange?: (color: HexColor) => void;
};
export default function ToolColorPicker(props: ToolColorPickerProps) {
  const [isOpen, setIsOpen] = useState(false);

  function handleSelectColor(e: ChangeEvent<HTMLInputElement>) {
    props.onChange?.(e.target.value as HexColor);
  }

  return (
    <div className="relative flex justify-between items-center bg-slate-900 border border-slate-600 rounded h-8 w-16">
      <div className="pl-2">
        <div
          className="w-5 h-5 rounded border border-white"
          style={{ background: props.value }}
        ></div>
      </div>
      <div
        className={`w-7 h-7 grid place-items-center rounded ${
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
      <input
        className={`opacity-0 absolute top-0 left-0 h-full w-full ${classes.colorPicker}`}
        type="color"
        onFocus={() => setIsOpen(true)}
        onBlur={() => setIsOpen(false)}
        value={props.value}
        onChange={handleSelectColor}
      />
    </div>
  );
}
