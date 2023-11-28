import { createRef } from 'react';
import { FontFamiliesEnum } from '../../types/font-families.enum';
import { AlignmentEnum } from 'src/types/alignment.enum';

type CustomizableTextField = {
  text?: string;
  alignment?: AlignmentEnum;
  fontColor?: string;
  fontSize?: number;
  fontFamily?: FontFamiliesEnum;
  allowEdit?: boolean;
  onTextChange?: (text: string) => void;
  onStartEditMode?: () => void;
  onStopEditMode?: (text: string) => void;
};

export default function CustomizableTextField({
  text = 'Your custom title',
  alignment = AlignmentEnum.CENTER,
  fontColor = '#000000',
  fontSize = 64,
  fontFamily = FontFamiliesEnum.KG_CHASING_CARS,
  allowEdit = false,
  onStartEditMode,
  onTextChange,
  onStopEditMode,
}: CustomizableTextField) {
  const textRef = createRef<HTMLHeadingElement>();

  function handleStartEditMode(): void {
    if (!allowEdit) return;
    onStartEditMode?.();
  }

  function handleTextChange(): void {
    if (!allowEdit) return;
    onTextChange?.(textRef.current?.innerText || '');
  }

  function handleStopEditMode(): void {
    if (!allowEdit) return;
    onStopEditMode?.(textRef.current?.innerText || '');
  }

  return (
    <div
      style={{
        fontSize: fontSize + 'px',
      }}
    >
      <h1
        ref={textRef}
        contentEditable={allowEdit}
        onFocus={handleStartEditMode}
        onInput={handleTextChange}
        onBlur={handleStopEditMode}
        style={{
          color: fontColor,
          fontFamily: fontFamily,
          textAlign: alignment,
        }}
        className={`outline-none text-[0.85em] xl:text-[1em]`}
        suppressContentEditableWarning
      >
        {text}
      </h1>
    </div>
  );
}
