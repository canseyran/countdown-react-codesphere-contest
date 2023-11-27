import { AlignmentEnum } from './types/alignment.enum';
import { BackgroundImages } from './types/background-images';
import { CountdownVariants } from './types/countdown-variants.enum';
import { FontFamiliesEnum } from './types/font-families.enum';

export const cfg = {
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
    backgroundImage: {
      DEFAULT: BackgroundImages[0],
      SEARCH_PARAM: 'background-image',
    },
    countdown: {
      date: {
        DEFAULT: new Date(2024, 6).getTime(),
        SEARCH_PARAM: 'target-date',
      },
      size: {
        DEFAULT: 96,
        SEARCH_PARAM: 'countdown-size',
      },
      variant: {
        DEFAULT: CountdownVariants.SIMPLE_ANIMATED,
        SEARCH_PARAM: 'countdown-variant',
      },
    },
  },
};

export const config = Object.freeze(cfg);
