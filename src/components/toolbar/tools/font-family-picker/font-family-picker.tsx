import { useMemo } from 'react';
import Dropdown from 'src/components/dropdown/dropdown';
import { DropdownOption } from 'src/types/dropdown-option.type';
import { FontFamiliesEnum } from 'src/types/font-families.enum';

type ToolFontFamilyPickerProps = {
  fontFamily: FontFamiliesEnum;
  onSetFontFamily: (fontFamily: FontFamiliesEnum) => void;
};

export default function ToolFontFamilyPicker(props: ToolFontFamilyPickerProps) {
  const dropdownOptions = useMemo(() => {
    return Object.values(FontFamiliesEnum).map(v => {
      return {
        value: v,
        label: v,
        fontFamily: v,
      };
    });
  }, []);

  const selectedDropdownOption = useMemo(() => {
    return {
      label: props.fontFamily,
      value: props.fontFamily,
      fontFamily: props.fontFamily,
    };
  }, [props.fontFamily]);

  function handleSelectFontFamily(option: DropdownOption) {
    props.onSetFontFamily(option.value as FontFamiliesEnum);
  }

  return (
    <div className="flex flex-nowrap items-center">
      <span className="text-white pr-2 whitespace-nowrap">Font Family</span>
      <div className="bg-darkGrey rounded  inline-block">
        <Dropdown
          className="min-w-[12rem] h-8 text"
          selectedOption={selectedDropdownOption}
          options={dropdownOptions}
          onOptionSelected={handleSelectFontFamily}
        />
      </div>
    </div>
  );
}
