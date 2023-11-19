import { useState, useRef, useEffect } from 'react';
import Heading from 'src/components/heading/heading';
import Toolbar from 'src/components/toolbar/toolbar';
import ToolColorPicker from 'src/components/toolbar/tools/color-picker/color-picker';
import ToolFontFamilyPicker from 'src/components/toolbar/tools/font-family-picker/font-family-picker';
import ToolSizePicker from 'src/components/toolbar/tools/size-picker/size-picker';
import useCustomCountdownSettings from 'src/hooks/useCustomCountdownSettings';
import useClickedOutside from 'src/hooks/useClickedOutside';
import { FontFamiliesEnum } from 'src/types/font-families.enum';

export default function HeadingWithToolbar() {
  const headingWithToolbarRef = useRef<Node>(null);
  const { clickedOutside } = useClickedOutside<Node>(headingWithToolbarRef);
  const [editMode, setEditMode] = useState(false);
  const {
    headingText,
    headingFontSize,
    headingFontFamily,
    headingFontColor,
    setHeadingText,
    setHeadingFontSize,
    setHeadingFontFamily,
    setHeadingFontColor,
  } = useCustomCountdownSettings();

  useEffect(() => {
    if (clickedOutside) {
      setEditMode(false);
    }
  }, [clickedOutside]);

  function handleStartEditMode() {
    setEditMode(true);
  }

  function handleStopEditMode(headingText: string) {
    setHeadingText(headingText);
  }

  return (
    <div className="relative mt-10 ml-5 p-5" ref={headingWithToolbarRef}>
      <Heading
        fontFamily={headingFontFamily}
        fontSize={headingFontSize}
        fontColor={headingFontColor}
        onStopEditMode={handleStopEditMode}
        onStartEditMode={handleStartEditMode}
        text={headingText}
        allowEdit
      ></Heading>
      {editMode ? (
        <Toolbar className="absolute top-0 left-0">
          <ToolFontFamilyPicker
            fontFamily={headingFontFamily}
            onSetFontFamily={setHeadingFontFamily}
          />
        </Toolbar>
      ) : (
        ''
      )}
    </div>
  );
}
