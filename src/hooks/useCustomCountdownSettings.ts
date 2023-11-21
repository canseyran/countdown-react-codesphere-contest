import { useCallback, useEffect, useState } from 'react';
import { config } from 'src/config';
import { useSearchParams } from 'react-router-dom';
import { FontFamiliesEnum } from 'src/types/font-families.enum';
import { HexColor } from 'src/types/hex-color.type';
import { AlignmentEnum } from 'src/types/alignment.enum';

const cfg = config.countdown;

export default function useCustomCountdownSettings() {
  const [searchParams, setSearchParams] = useSearchParams();

  const [headingText, setHeadingText] = useState<string>(() => {
    return (
      searchParams.get(cfg.heading.text.SEARCH_PARAM) ||
      cfg.heading.text.DEFAULTS[
        Math.floor(Math.random() * cfg.heading.text.DEFAULTS.length)
      ]
    ).slice(0, cfg.heading.text.MAX_LENGTH);
  });

  const [headingFontFamily, setHeadingFontFamily] = useState(() => {
    return (searchParams.get(cfg.heading.font.family.SEARCH_PARAM) ||
      cfg.heading.font.family.DEFAULT) as FontFamiliesEnum;
  });

  const [headingFontSize, setHeadingFontSize] = useState<number>(() => {
    let fontSize;
    try {
      const fontSizeString = searchParams.get(
        cfg.heading.font.size.SEARCH_PARAM,
      );
      if (!fontSizeString) {
        throw new Error('No font size in search params provided');
      }
      fontSize = Number(fontSizeString);
    } catch (e) {
      fontSize = cfg.heading.font.size.DEFAULT;
    }
    return fontSize;
  });

  const [headingFontColor, setHeadingFontColor] = useState<HexColor>(() => {
    return (searchParams.get(cfg.heading.font.color.SEARCH_PARAM) ||
      cfg.heading.font.color.DEFAULT) as HexColor;
  });

  const [headingAlignment, setHeadingAlignment] = useState<AlignmentEnum>(
    () => {
      return (searchParams.get(cfg.heading.alignment.SEARCH_PARAM) ||
        cfg.heading.alignment.DEFAULT) as AlignmentEnum;
    },
  );

  // Helper function to set query params
  const setParam = useCallback(
    (param: string, value: string) => {
      searchParams.set(param, value);
      setSearchParams(searchParams);
    },
    [searchParams, setSearchParams],
  );

  useEffect(() => {
    setParam(cfg.heading.text.SEARCH_PARAM, headingText);
  }, [headingText, setParam]);

  useEffect(() => {
    setParam(
      cfg.heading.font.family.SEARCH_PARAM,
      headingFontFamily?.toString(),
    );
  }, [headingFontFamily, setParam]);

  useEffect(() => {
    setParam(cfg.heading.font.size.SEARCH_PARAM, headingFontSize.toString());
  }, [headingFontSize, setParam]);

  useEffect(() => {
    setParam(cfg.heading.font.color.SEARCH_PARAM, headingFontColor);
  }, [headingFontColor, setParam]);

  useEffect(() => {
    setParam(cfg.heading.alignment.SEARCH_PARAM, headingAlignment);
  }, [headingAlignment, setParam]);

  return {
    headingText,
    headingFontFamily,
    headingFontSize,
    headingFontColor,
    headingAlignment,
    setHeadingText,
    setHeadingFontFamily,
    setHeadingFontSize,
    setHeadingFontColor,
    setHeadingAlignment,
  };
}
