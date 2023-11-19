import { useState } from 'react';
import { config } from 'src/config';
import { useSearchParams } from 'react-router-dom';
import { FontFamiliesEnum } from 'src/types/font-families.enum';
import { HexColor } from 'src/types/hex-color.type';

const cfg = config.countdown;

export default function useCustomCountdownSettings() {
  const [searchParams, setSearchParams] = useSearchParams();

  const [headingText, setStateHeadingText] =
    useState<string>(initHeadingText());
  const [headingFontFamily, setStateHeadingFontFamily] =
    useState<FontFamiliesEnum>(initHeadingFontFamily());
  const [headingFontSize, setStateHeadingFontSize] = useState<number>(
    initHeadingFontSize(),
  );
  const [headingFontColor, setStateHeadingFontColor] = useState<HexColor>(
    initHeadingFontColor(),
  );

  function initHeadingText() {
    const searchParamHeadingText =
      searchParams.get(cfg.heading.text.SEARCH_PARAM) ||
      cfg.heading.text.DEFAULTS[
        Math.floor(
          Math.random() * config.countdown.heading.text.DEFAULTS.length,
        )
      ];
    return searchParamHeadingText.slice(0, cfg.heading.text.MAX_LENGTH);
  }

  function initHeadingFontFamily(): FontFamiliesEnum {
    const fontFamilyString =
      searchParams.get(cfg.heading.font.family.SEARCH_PARAM) ||
      cfg.heading.font.family.DEFAULT;
    return fontFamilyString as FontFamiliesEnum;
  }

  function initHeadingFontSize(): number {
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
  }

  function initHeadingFontColor(): HexColor {
    const fontColor =
      searchParams.get(cfg.heading.font.color.SEARCH_PARAM) ||
      cfg.heading.font.color.DEFAULT;
    return fontColor as HexColor;
  }

  function setHeadingText(text: string): void {
    setStateHeadingText(text);
    setParam(cfg.heading.text.SEARCH_PARAM, text);
  }

  function setHeadingFontFamily(fontFamily: FontFamiliesEnum): void {
    setStateHeadingFontFamily(fontFamily);
    setParam(cfg.heading.font.family.SEARCH_PARAM, fontFamily);
  }

  function setHeadingFontSize(fontSize: number): void {
    setStateHeadingFontSize(fontSize);
    setParam(cfg.heading.font.size.SEARCH_PARAM, fontSize);
  }

  function setHeadingFontColor(color: HexColor): void {
    setStateHeadingFontColor(color);
    setParam(cfg.heading.font.color.SEARCH_PARAM, color);
  }

  // Helper function to set query params
  function setParam(param: string, value: string): void {
    searchParams.set(param, value);
    setSearchParams(searchParams);
  }

  return {
    headingText,
    headingFontFamily,
    headingFontSize,
    headingFontColor,
    setHeadingText,
    setHeadingFontFamily,
    setHeadingFontSize,
    setHeadingFontColor,
  };
}
