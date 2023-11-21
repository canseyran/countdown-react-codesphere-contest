import { FontFamiliesEnum } from './font-families.enum';

export type DropdownOption = {
  value: string;
  label: string;
  fontFamily?: FontFamiliesEnum;
};
