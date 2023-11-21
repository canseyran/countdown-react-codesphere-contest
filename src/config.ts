import { AlignmentEnum } from './types/alignment.enum';
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
          DEFAULT: FontFamiliesEnum.KG_CHASING_CARS,
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
      alignment: {
        DEFAULT: AlignmentEnum.CENTER,
        SEARCH_PARAM: 'heading-alignment',
      },
    },
  },
};
