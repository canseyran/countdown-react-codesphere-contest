import { useMemo } from 'react';
import Dropdown from 'src/components/dropdown/dropdown';
import { DropdownOption } from 'src/types/dropdown-option.type';
import { FontFamiliesEnum } from 'src/types/font-families.enum';

type ToolFontFamilyPickerProps = {
  value: FontFamiliesEnum;
  onChange: (fontFamily: FontFamiliesEnum) => void;
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
      label: props.value,
      value: props.value,
      fontFamily: props.value,
    };
  }, [props.value]);

  function handleSelectFontFamily(option: DropdownOption) {
    props.onChange(option.value as FontFamiliesEnum);
  }

  return (
    <Dropdown
      className="!w-[12rem]"
      selectedOption={selectedDropdownOption}
      options={dropdownOptions}
      onOptionSelected={handleSelectFontFamily}
    />
  );
}
