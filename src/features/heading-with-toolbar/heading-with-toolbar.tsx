import { useState, useRef, useEffect, ReactNode } from 'react';
import Heading from 'src/components/heading/heading';
import Toolbar from 'src/components/toolbar/toolbar';
import ToolColorPicker from 'src/components/toolbar/tools/color-picker/color-picker';
import ToolFontFamilyPicker from 'src/components/toolbar/tools/font-family-picker/font-family-picker';
import ToolAlignmentPicker from 'src/components/toolbar/tools/alignment-picker/alignment-picker';
import ToolSizePicker from 'src/components/toolbar/tools/size-picker/size-picker';
import useCustomCountdownSettings from 'src/hooks/useCustomCountdownSettings';
import useClickedOutside from 'src/hooks/useClickedOutside';
import { FontFamiliesEnum } from 'src/types/font-families.enum';
import { HexColor } from 'src/types/hex-color.type';

type HeadingWithToolbarProps = {
  className?: string;
};

export default function HeadingWithToolbar(props: HeadingWithToolbarProps) {
  const headingWithToolbarRef = useRef<HTMLDivElement>(null);
  const { clickedOutside } = useClickedOutside(headingWithToolbarRef);
  const [editMode, setEditMode] = useState(false);
  const {
    headingText,
    headingFontSize,
    headingFontFamily,
    headingFontColor,
    headingAlignment,
    setHeadingText,
    setHeadingFontSize,
    setHeadingFontFamily,
    setHeadingFontColor,
    setHeadingAlignment,
  } = useCustomCountdownSettings();

  useEffect(() => {
    if (clickedOutside) {
      setEditMode(false);
    }
  }, [clickedOutside]);

  function handleStartEditMode() {
    setEditMode(true);
  }

  function handleStopEditMode(headingText: string): void {
    setHeadingText(headingText);
  }

  function handleSetColor(color: HexColor): void {
    setHeadingFontColor(color);
  }

  return (
    <div
      className={`inline-block relative border-2 rounded-xl  ${
        editMode ? ' border-orange-400' : 'border-transparent'
      } ${props.className}`}
      ref={headingWithToolbarRef}
    >
      {editMode ? (
        <div className="absolute top-0 left-[50%] bg-orange-400 rounded-xl px-4 text-white font-bold -translate-y-[50%] -translate-x-[50%]">
          HEADING
        </div>
      ) : (
        ''
      )}
      <Heading
        fontFamily={headingFontFamily}
        alignment={headingAlignment}
        fontSize={headingFontSize}
        fontColor={headingFontColor}
        onStopEditMode={handleStopEditMode}
        onStartEditMode={handleStartEditMode}
        text={headingText}
        allowEdit
      />
      {editMode ? (
        <Toolbar className="absolute bottom-0 left-[50%] translate-y-full -translate-x-[50%]">
          <ToolFontFamilyPicker
            fontFamily={headingFontFamily}
            onSetFontFamily={setHeadingFontFamily}
          />
          <ToolColorPicker
            onSetColor={handleSetColor}
            color={headingFontColor}
          ></ToolColorPicker>
          <ToolAlignmentPicker
            onChange={setHeadingAlignment}
            value={headingAlignment}
          />
        </Toolbar>
      ) : (
        ''
      )}
    </div>
  );
}
