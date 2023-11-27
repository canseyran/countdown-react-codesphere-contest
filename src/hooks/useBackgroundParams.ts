import {
  BackgroundImage,
  BackgroundImages,
} from 'src/types/background-images';
import useCustomParams from './useCustomParams';
import { useEffect, useState } from 'react';
import { config } from 'src/config';

const cfg = config.countdown.backgroundImage;

export default function useBackgroundParams() {
  const { getParam, setParam } = useCustomParams();

  const [backgroundImage, setBackgroundImage] =
    useState<BackgroundImage>(() => {
      const key = getParam(cfg.SEARCH_PARAM);
      const image = BackgroundImages.find(v => v.name === key);

      return image || cfg.DEFAULT;
    });

  useEffect(() => {
    setParam(cfg.SEARCH_PARAM, backgroundImage.name);
  }, [backgroundImage, setParam]);

  return {
    backgroundImage,
    setBackgroundImage,
  };
}
