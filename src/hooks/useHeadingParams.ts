import useCustomParams from './useCustomParams';
import { useEffect, useState } from 'react';
import { config } from 'src/config';
import { AlignmentEnum } from 'src/types/alignment.enum';
import { FontFamiliesEnum } from 'src/types/font-families.enum';
import { HexColor } from 'src/types/hex-color.type';

const cfg = config.countdown.heading;

export default function useHeadingParams() {
  const { getParam, setParam } = useCustomParams();

  const [headingText, setHeadingText] = useState<string>(() => {
    return (
      getParam(cfg.text.SEARCH_PARAM) ??
      cfg.text.DEFAULTS[
        Math.floor(Math.random() * cfg.text.DEFAULTS.length)
      ]
    ).slice(0, cfg.text.MAX_LENGTH);
  });

  const [headingFontFamily, setHeadingFontFamily] = useState(() => {
    return (getParam(cfg.font.family.SEARCH_PARAM) ||
      cfg.font.family.DEFAULT) as FontFamiliesEnum;
  });

  const [headingFontSize, setHeadingFontSize] = useState<number>(
    () => {
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
    },
  );

  const [headingFontColor, setHeadingFontColor] = useState<HexColor>(
    () => {
      return (getParam(cfg.font.color.SEARCH_PARAM) ||
        cfg.font.color.DEFAULT) as HexColor;
    },
  );

  const [headingAlignment, setHeadingAlignment] =
    useState<AlignmentEnum>(() => {
      return (getParam(cfg.alignment.SEARCH_PARAM) ||
        cfg.alignment.DEFAULT) as AlignmentEnum;
    });

  useEffect(() => {
    setParam(cfg.text.SEARCH_PARAM, headingText);
  }, [headingText, setParam]);

  useEffect(() => {
    setParam(
      cfg.font.family.SEARCH_PARAM,
      headingFontFamily?.toString(),
    );
  }, [headingFontFamily, setParam]);

  useEffect(() => {
    setParam(cfg.font.size.SEARCH_PARAM, headingFontSize.toString());
  }, [headingFontSize, setParam]);

  useEffect(() => {
    setParam(cfg.font.color.SEARCH_PARAM, headingFontColor);
  }, [headingFontColor, setParam]);

  useEffect(() => {
    setParam(cfg.alignment.SEARCH_PARAM, headingAlignment);
  }, [headingAlignment, setParam]);

  return {
    headingText,
    headingFontSize,
    headingAlignment,
    headingFontColor,
    headingFontFamily,
    setHeadingText,
    setHeadingFontSize,
    setHeadingAlignment,
    setHeadingFontColor,
    setHeadingFontFamily,
  };
}
