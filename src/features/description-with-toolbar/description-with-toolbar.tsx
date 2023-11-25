import { useState, useRef, useEffect } from 'react';
import Toolbar from 'src/components/toolbar/toolbar';
import ToolColorPicker from 'src/components/toolbar/tools/color-picker/color-picker';
import ToolFontFamilyPicker from 'src/components/toolbar/tools/font-family-picker/font-family-picker';
import ToolAlignmentPicker from 'src/components/toolbar/tools/alignment-picker/alignment-picker';
import ToolSizePicker from 'src/components/toolbar/tools/size-picker/size-picker';
import useCustomCountdownSettings from 'src/hooks/useCustomCountdownSettings';
import useClickedOutside from 'src/hooks/useClickedOutside';
import { HexColor } from 'src/types/hex-color.type';
import CustomizableTextField from 'src/components/customizable-text-field/customizable-text-field';

type DescriptionWithToolbarProps = {
  className?: string;
};

export default function DescriptionWithToolbar(
  props: DescriptionWithToolbarProps,
) {
  const headingWithToolbarRef = useRef<HTMLDivElement>(null);
  const { clickedOutside } = useClickedOutside(headingWithToolbarRef);
  const [editMode, setEditMode] = useState(false);
  const {
    descriptionText,
    descriptionFontSize,
    descriptionFontFamily,
    descriptionFontColor,
    descriptionAlignment,
    setDescriptionText,
    setDescriptionFontSize,
    setDescriptionFontFamily,
    setDescriptionFontColor,
    setDescriptionAlignment,
  } = useCustomCountdownSettings();

  useEffect(() => {
    if (clickedOutside) {
      setEditMode(false);
    }
  }, [clickedOutside]);

  function handleStartEditMode() {
    setEditMode(true);
  }

  function handleStopEditMode(descriptionText: string): void {
    setDescriptionText(descriptionText);
  }

  function handleSetColor(color: HexColor): void {
    setDescriptionFontColor(color);
  }

  return (
    <div className={props.className}>
      <div
        className={`inline-block relative border-2 rounded-xl w-[90vw] max-w-[60rem] py-5 ${
          editMode ? ' border-orange-400' : 'border-transparent'
        }`}
        ref={headingWithToolbarRef}
      >
        {editMode ? (
          <div className="absolute top-0 left-[50%] bg-orange-400 rounded-xl px-4 text-white font-bold -translate-y-[50%] -translate-x-[50%]">
            DESCRIPTION
          </div>
        ) : (
          ''
        )}
        <CustomizableTextField
          fontFamily={descriptionFontFamily}
          alignment={descriptionAlignment}
          fontSize={descriptionFontSize}
          fontColor={descriptionFontColor}
          onStopEditMode={handleStopEditMode}
          onStartEditMode={handleStartEditMode}
          text={descriptionText}
          allowEdit
        />
        {editMode ? (
          <Toolbar className="absolute bottom-0 left-[50%] translate-y-full -translate-x-[50%] w-[90vw] z-50">
            <ToolFontFamilyPicker
              value={descriptionFontFamily}
              onChange={setDescriptionFontFamily}
            />
            <ToolColorPicker
              onChange={handleSetColor}
              value={descriptionFontColor}
            ></ToolColorPicker>
            <ToolAlignmentPicker
              onChange={setDescriptionAlignment}
              value={descriptionAlignment}
            />
            <ToolSizePicker
              onChange={setDescriptionFontSize}
              minValue={16}
              maxValue={128}
              steps={4}
              value={descriptionFontSize}
            />
          </Toolbar>
        ) : (
          ''
        )}
      </div>
    </div>
  );
}
