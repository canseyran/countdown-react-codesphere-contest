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
    <div className="flex gap-2 bg-darkGrey rounded h-8 items-center px-2">
      <AlignLeftIcon
        fill="white"
        className="w-5 h-5"
        onClick={handleAlignLeft}
      />
      <AlignCenterIcon
        fill="white"
        className="w-5 h-5"
        onClick={handleAlignCenter}
      />
      <AlignRightIcon
        fill="white"
        className="w-5 h-5"
        onClick={handleAlignRight}
      />
    </div>
  );
}
