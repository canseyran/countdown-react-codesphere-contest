import { useState } from 'react';
import useCustomParams from './useCustomParams';
import { config } from 'src/config';

const cfg = config.countdown.editMode;

export default function useEditModeParams() {
  const { getParam } = useCustomParams();

  const [isEditMode] = useState<boolean>(() => {
    const paramVal = getParam(cfg.SEARCH_PARAM);
    if (paramVal === 'false') {
      return false;
    }
    if (paramVal === 'true') {
      return true;
    }
    return cfg.DEFAULT;
  });

  return {
    isEditMode,
  };
}
