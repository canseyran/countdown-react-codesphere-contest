import { config } from 'src/config';
import useCustomParams from './useCustomParams';
import { FontFamiliesEnum } from 'src/types/font-families.enum';
import { useEffect, useState } from 'react';
import { HexColor } from 'src/types/hex-color.type';
import { AlignmentEnum } from 'src/types/alignment.enum';

const cfg = config.countdown.description;

export default function useDescriptionParams() {
  const { setParam, getParam } = useCustomParams();

  const [descriptionText, setDescriptionText] = useState<string>(
    () => {
      return (
        getParam(cfg.text.SEARCH_PARAM) ||
        cfg.text.DEFAULTS[
          Math.floor(Math.random() * cfg.text.DEFAULTS.length)
        ]
      ).slice(0, cfg.text.MAX_LENGTH);
    },
  );

  const [descriptionFontFamily, setDescriptionFontFamily] = useState(
    () => {
      return (getParam(cfg.font.family.SEARCH_PARAM) ||
        cfg.font.family.DEFAULT) as FontFamiliesEnum;
    },
  );

  const [descriptionFontSize, setDescriptionFontSize] =
    useState<number>(() => {
      let fontSize;
      try {
        const fontSizeString = getParam(cfg.font.size.SEARCH_PARAM);
        if (!fontSizeString) {
          throw new Error('No font size in search params provided');
        }
        fontSize = Number(fontSizeString);
      } catch (e) {
        fontSize = cfg.font.size.DEFAULT;
      }
      return fontSize;
    });

  const [descriptionFontColor, setDescriptionFontColor] =
    useState<HexColor>(() => {
      return (getParam(cfg.font.color.SEARCH_PARAM) ||
        cfg.font.color.DEFAULT) as HexColor;
    });

  const [descriptionAlignment, setDescriptionAlignment] =
    useState<AlignmentEnum>(() => {
      return (getParam(cfg.alignment.SEARCH_PARAM) ||
        cfg.alignment.DEFAULT) as AlignmentEnum;
    });

  useEffect(() => {
    setParam(cfg.text.SEARCH_PARAM, descriptionText);
  }, [descriptionText, setParam]);

  useEffect(() => {
    setParam(
      cfg.font.family.SEARCH_PARAM,
      descriptionFontFamily?.toString(),
    );
  }, [descriptionFontFamily, setParam]);

  useEffect(() => {
    setParam(
      cfg.font.size.SEARCH_PARAM,
      descriptionFontSize.toString(),
    );
  }, [descriptionFontSize, setParam]);

  useEffect(() => {
    setParam(cfg.font.color.SEARCH_PARAM, descriptionFontColor);
  }, [descriptionFontColor, setParam]);

  useEffect(() => {
    setParam(cfg.alignment.SEARCH_PARAM, descriptionAlignment);
  }, [descriptionAlignment, setParam]);

  return {
    descriptionText,
    descriptionFontFamily,
    descriptionFontSize,
    descriptionFontColor,
    descriptionAlignment,
    setDescriptionText,
    setDescriptionFontFamily,
    setDescriptionFontSize,
    setDescriptionFontColor,
    setDescriptionAlignment,
  };
}
