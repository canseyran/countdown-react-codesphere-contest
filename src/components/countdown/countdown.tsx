import { CountdownVariants } from 'src/types/countdown-variants.enum';
import { CountdownData } from 'src/types/countdown-data.type';
import CountdownSimpleAnimated from './variants/simple-animated/simple-animated';
import { MouseEventHandler, useEffect, useState } from 'react';
import CountdownCircle from './variants/circle/circle';
import CountdownRectangle from './variants/rectangle/rectangle';

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
        break;
      case CountdownVariants.CIRCLES:
        setCurrentVariant(
          <CountdownCircle countdownData={props.countdownData} />,
        );
        break;

      case CountdownVariants.RECTANGLES:
        setCurrentVariant(
          <CountdownRectangle countdownData={props.countdownData} />,
        );
        break;
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
