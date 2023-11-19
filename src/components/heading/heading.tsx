import { createRef } from 'react';
import { FontFamiliesEnum } from '../../types/font-families.enum';

type HeadingProps = {
  text?: string;
  fontColor?: string;
  fontSize?: number;
  fontFamily?: FontFamiliesEnum;
  allowEdit?: boolean;
  onTextChange?: (text: string) => void;
  onStartEditMode?: () => void;
  onStopEditMode?: (text: string) => void;
};

export default function Heading({
  text = 'Your custom title',
  fontColor: color = '#000000',
  fontSize = 64,
  fontFamily = FontFamiliesEnum.KG_CHASING_CARS,
  allowEdit = false,
  onStartEditMode,
  onTextChange,
  onStopEditMode,
}: HeadingProps) {
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
    <h1
      ref={textRef}
      contentEditable={allowEdit}
      suppressContentEditableWarning
      onFocus={handleStartEditMode}
      onInput={handleTextChange}
      onBlur={handleStopEditMode}
      style={{
        color: color,
        fontSize: fontSize + 'px',
        fontFamily: fontFamily,
      }}
    >
      {text}
    </h1>
  );
}
