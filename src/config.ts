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
          SEARCH_PARAM: 'heading-font-family',
        },
        size: {
          DEFAULT: 64,
          SEARCH_PARAM: 'heading-font-size',
        },
        color: {
          DEFAULT: '#000000',
          SEARCH_PARAM: 'heading-font-color',
        },
      },
      alignment: {
        DEFAULT: AlignmentEnum.CENTER,
        SEARCH_PARAM: 'heading-alignment',
      },
    },
    description: {
      text: {
        DEFAULTS: ['Click here to change your description'],
        SEARCH_PARAM: 'description-text',
        MAX_LENGTH: 254,
      },
      font: {
        family: {
          DEFAULT: FontFamiliesEnum.KG_CHASING_CARS,
          SEARCH_PARAM: 'description-font-family',
        },
        size: {
          DEFAULT: 20,
          SEARCH_PARAM: 'description-font-size',
        },
        color: {
          DEFAULT: '#000000',
          SEARCH_PARAM: 'description-font-color',
        },
      },
      alignment: {
        DEFAULT: AlignmentEnum.CENTER,
        SEARCH_PARAM: 'description-alignment',
      },
    },
  },
};
