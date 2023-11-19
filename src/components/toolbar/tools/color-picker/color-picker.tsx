import { HexColor } from 'src/types/hex-color.type';

type ToolColorPickerProps = {
  color: HexColor;
  onSetColor: (color: HexColor) => void;
};
export default function ToolColorPicker(props: ToolColorPickerProps) {
  function handleSelectColor() {
    props.onSetColor('#a83250');
  }

  return (
    <div>
      {props.color} <button onClick={handleSelectColor}>red</button>
    </div>
  );
}
