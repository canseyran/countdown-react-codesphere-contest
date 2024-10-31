import { AlignmentEnum } from './types/alignment.enum';
import { BackgroundImages } from './types/background-images';
import { CountdownVariants } from './types/countdown-variants.enum';
import { FontFamiliesEnum } from './types/font-families.enum';

export const cfg = {
  countdown: {
    editMode: {
      DEFAULT: true,
      SEARCH_PARAM: 'edit',
    },
    heading: {
      text: {
        DEFAULTS: ['Merry Christmas'],
        SEARCH_PARAM: 'heading-text',
        MAX_LENGTH: 45,
      },
      font: {
        family: {
          DEFAULT: FontFamiliesEnum.VINTAGE_KING,
          SEARCH_PARAM: 'heading-font-family',
        },
        size: {
          DEFAULT: 64,
          SEARCH_PARAM: 'heading-font-size',
        },
        color: {
          DEFAULT: '#FFFFFF',
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
        DEFAULTS: [
          "Join us in the festive countdown to Christmas! Each day brings us closer to joy, traditions, and the spirit of giving. Anticipate the magic with daily delights, spreading cheer and warmth. Let's make this Christmas unforgettable together! 🌟🎁 #MerryChristmas #CountdownToChristmas",
        ],
        SEARCH_PARAM: 'description-text',
        MAX_LENGTH: 450,
      },
      font: {
        family: {
          DEFAULT: FontFamiliesEnum.TYPEWRITER,
          SEARCH_PARAM: 'description-font-family',
        },
        size: {
          DEFAULT: 20,
          SEARCH_PARAM: 'description-font-size',
        },
        color: {
          DEFAULT: '#FFFFFF',
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
        DEFAULT: new Date(2024, 11, 25).getTime(),
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
