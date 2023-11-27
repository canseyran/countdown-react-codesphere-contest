import { useMemo } from 'react';
import Dropdown from 'src/components/dropdown/dropdown';
import { CountdownVariants } from 'src/types/countdown-variants.enum';
import { DropdownOption } from 'src/types/dropdown-option.type';

type ToolCountdownVariantPickerProps = {
  value: CountdownVariants;
  onChange: (variant: CountdownVariants) => void;
};

export default function ToolCountdownVariantPicker(
  props: ToolCountdownVariantPickerProps,
) {
  const dropdownOptions = useMemo(() => {
    return Object.values(CountdownVariants).map(v => {
      return {
        value: v,
        label: v,
      };
    });
  }, []);

  const selectedDropdownOption = useMemo(() => {
    return {
      label: props.value,
      value: props.value,
    };
  }, [props.value]);

  function handleSelectFontFamily(option: DropdownOption) {
    props.onChange(option.value as CountdownVariants);
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
