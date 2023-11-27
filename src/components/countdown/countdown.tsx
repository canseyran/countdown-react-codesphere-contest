import { CountdownVariants } from 'src/types/countdown-variants.enum';
import { CountdownData } from 'src/types/countdown-data.type';
import CountdownSimpleAnimated from './variants/simple-animated/simple-animated';
import { MouseEventHandler, useEffect, useState } from 'react';

type CountdownProps = {
  variant: CountdownVariants;
  countdownData: CountdownData;
  size: number;
  onClick?: MouseEventHandler;
};

export default function Countdown(props: CountdownProps) {
  const [currentVariant, setCurrentVariant] = useState(<></>);

  useEffect(() => {
    switch (props.variant) {
      case CountdownVariants.SIMPLE_ANIMATED:
        setCurrentVariant(
          <CountdownSimpleAnimated
            countdownData={props.countdownData}
          />,
        );
    }
  }, [props.variant, props.countdownData]);
  return (
    <div
      onClick={props.onClick}
      style={{ fontSize: `${props.size}px` }}
    >
      {currentVariant}
    </div>
  );
}
