import AlignCenterIcon from 'src/components/icons/align-center';
import AlignLeftIcon from 'src/components/icons/align-left';
import AlignRightIcon from 'src/components/icons/align-right';
import { AlignmentEnum } from 'src/types/alignment.enum';

type ToolAlignmentPickerProps = {
  value?: AlignmentEnum;
  onChange?: (alignment: AlignmentEnum) => void;
};

export default function ToolAlignmentPicker(props: ToolAlignmentPickerProps) {
  function handleAlignLeft() {
    props.onChange?.(AlignmentEnum.LEFT);
  }

  function handleAlignCenter() {
    props.onChange?.(AlignmentEnum.CENTER);
  }

  function handleAlignRight() {
    props.onChange?.(AlignmentEnum.RIGHT);
  }

  return (
    <div className="flex gap-2 bg-slate-900 border border-slate-600 rounded h-8 items-center">
      <button
        onClick={handleAlignLeft}
        className="pl-2 pr-1 rounded bg-slate-900 hover:bg-slate-800 w-full h-full"
      >
        <AlignLeftIcon fill="white" className="w-5 h-5" />
      </button>
      <button
        onClick={handleAlignCenter}
        className="px-1 bg-slate-900 rounded hover:bg-slate-800 w-full h-full"
      >
        <AlignCenterIcon fill="white" className="w-5 h-5" />
      </button>
      <button
        onClick={handleAlignRight}
        className="pr-2 pl-1 bg-slate-900 rounded hover:bg-slate-800 w-full h-full"
      >
        <AlignRightIcon fill="white" className="w-5 h-5" />
      </button>
    </div>
  );
}
