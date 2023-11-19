import { FontFamiliesEnum } from './types/font-families.enum';

export const config = {
  countdown: {
    heading: {
      text: {
        DEFAULTS: ['Click here to change your heading'],
        SEARCH_PARAM: 'heading-text',
        MAX_LENGTH: 45,
      },
      font: {
        family: {
          DEFAULT: FontFamiliesEnum.SATURDAY,
          SEARCH_PARAM: 'font-family',
        },
        size: {
          DEFAULT: 96,
          SEARCH_PARAM: 'font-size',
        },
        color: {
          DEFAULT: '#000000',
          SEARCH_PARAM: 'font-color',
        },
      },
    },
  },
};
