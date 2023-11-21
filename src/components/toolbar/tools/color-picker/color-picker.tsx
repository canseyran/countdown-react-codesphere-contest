import { ChangeEvent } from 'react';
import CaretDownIcon from 'src/components/icons/caret-down';
import { HexColor } from 'src/types/hex-color.type';

type ToolColorPickerProps = {
  color: HexColor;
  onSetColor: (color: HexColor) => void;
};
export default function ToolColorPicker(props: ToolColorPickerProps) {
  function handleSelectColor(e: ChangeEvent<HTMLInputElement>) {
    props.onSetColor(e.target.value as HexColor);
  }

  return (
    <div className="flex items-center gap-2 relative">
      <span className="text-white">Color</span>
      <div className="relative flex items-center bg-darkGrey rounded h-8 pr-1 pl-3 w-100">
        <div
          className="w-5 h-5 rounded border border-white"
          style={{ background: props.color }}
        ></div>
        <input
          className="opacity-0 absolute top-0 left-0 h-full w-full"
          type="color"
          value={props.color}
          onChange={handleSelectColor}
        />
        <CaretDownIcon className="w-8 h-8" fill="white"></CaretDownIcon>
      </div>
    </div>
  );
}
