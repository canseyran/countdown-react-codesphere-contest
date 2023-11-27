import { config } from 'src/config';
import useCustomParams from './useCustomParams';
import { useEffect, useState } from 'react';
import { CountdownVariants } from 'src/types/countdown-variants.enum';

const cfg = config.countdown.countdown;

export default function useCountdownParams() {
  const { getParam, setParam } = useCustomParams();

  const [targetDate, setTargetDate] = useState<number>(() => {
    const paramVal = getParam(cfg.date.SEARCH_PARAM);
    if (!paramVal) {
      return cfg.date.DEFAULT;
    }
    const numParamVal = parseInt(paramVal);
    if (isNaN(numParamVal)) {
      return cfg.date.DEFAULT;
    } else {
      return numParamVal;
    }
  });

  const [countdownSize, setCountdownSize] = useState<number>(() => {
    let countdownSize;
    try {
      const countdownSizeString = getParam(cfg.size.SEARCH_PARAM);
      if (!countdownSizeString) {
        throw new Error(
          'No countdown size in search params provided',
        );
      }
      countdownSize = Number(countdownSizeString);
    } catch (e) {
      countdownSize = cfg.size.DEFAULT;
    }
    return countdownSize;
  });

  const [variant, setVariant] = useState<CountdownVariants>(() => {
    const paramVal = getParam(cfg.variant.SEARCH_PARAM);
    if (!paramVal) {
      return cfg.variant.DEFAULT;
    }
    return paramVal as CountdownVariants;
  });

  useEffect(() => {
    setParam(cfg.date.SEARCH_PARAM, targetDate.toString());
  }, [targetDate, setParam]);

  useEffect(() => {
    setParam(cfg.size.SEARCH_PARAM, countdownSize.toString());
  }, [countdownSize, setParam]);

  useEffect(() => {
    setParam(cfg.variant.SEARCH_PARAM, variant.toString());
  }, [variant, setParam]);

  return {
    targetDate,
    countdownSize,
    setTargetDate,
    setCountdownSize,
    variant,
    setVariant,
  };
}
