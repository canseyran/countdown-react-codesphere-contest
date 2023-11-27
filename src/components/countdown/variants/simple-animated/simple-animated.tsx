import { useEffect, useState } from 'react';
import { CountdownVariantProps } from '../countdown-variant-props.type';
import classes from './simple-animated.module.css';

export default function CountdownSimpleAnimated(
  props: CountdownVariantProps,
) {
  const { countdownData } = props;

  return (
    <div className="flex">
      <Digit
        current={countdownData.seconds.current.slice(0, 1)}
        next={countdownData.seconds.next.slice(0, 1)}
      />
      <Digit
        current={countdownData.seconds.current.slice(1)}
        next={countdownData.seconds.next.slice(1)}
      />
    </div>
  );
}

type DigitProps = {
  current: string;
  next: string;
};

function Digit(props: DigitProps) {
  const { current, next } = props;
  const [shouldAnimate, setShouldAnimate] = useState(false);

  useEffect(() => {
    if (current !== next) {
      setShouldAnimate(false);

      const timeoutId = setTimeout(() => {
        setShouldAnimate(true);
      }, 50);

      return () => {
        clearTimeout(timeoutId);
      };
    }
  }, [current, next]);

  return (
    <div className={`${classes.digit}`}>
      <span
        className={`${classes.text} ${classes.next} ${
          shouldAnimate ? classes.slideDown : ''
        }`}
      >
        {next}
      </span>
      <span
        className={`${classes.text} ${
          shouldAnimate ? classes.slideDown : ''
        }`}
      >
        {current}
      </span>
    </div>
  );
}
