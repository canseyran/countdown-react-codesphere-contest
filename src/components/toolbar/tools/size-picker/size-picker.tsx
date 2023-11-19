import { useMemo } from 'react';

type ToolSizePickerProps = {
  size: number;
  onSetSize: (size: number) => void;
};
export default function ToolSizePicker(props: ToolSizePickerProps) {
  const numbers = useMemo(() => {
    return Array.from({ length: 15 }, (_, index) => (index + 1) * 10);
  }, []);

  function handleSelectSize(event: React.ChangeEvent<HTMLSelectElement>) {
    const size = event.target.value as number;
    props.onSetSize(size);
  }
  return (
    <div>
      <select onChange={handleSelectSize} defaultValue={props.size}>
        {numbers.map(number => (
          <option key={number} value={number}>
            {number}
          </option>
        ))}
      </select>
    </div>
  );
}
