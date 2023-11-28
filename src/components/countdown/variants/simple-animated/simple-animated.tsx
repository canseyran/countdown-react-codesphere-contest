import { useEffect, useState } from 'react';
import { CountdownVariantProps } from '../countdown-variant-props.type';
import classes from './simple-animated.module.css';
import usePrevious from 'src/hooks/usePrevious';

export default function CountdownSimpleAnimated(
  props: CountdownVariantProps,
) {
  const { countdownData } = props;
  const [daysCharCount, setDaysCharCount] = useState<boolean[]>([]);

  useEffect(() => {
    const len = props.countdownData.days.length;
    setDaysCharCount(new Array<boolean>(len).fill(true));
  }, [props.countdownData.days]);

  return (
    <div className={classes.container}>
      <div className={classes.group}>
        <div className={classes.digitsGroup}>
          {daysCharCount.map((v, idx) => {
            return (
              <Digit
                key={idx}
                digit={countdownData.days.slice(idx, idx + 1)}
              />
            );
          })}
        </div>

        <h3 className={classes.heading}>DAYS</h3>
      </div>

      <div className={classes.group}>
        <div className={classes.digitsGroup}>
          <Digit digit={countdownData.hours.slice(0, 1)} />
          <Digit digit={countdownData.hours.slice(1)} />
        </div>
        <h3 className={classes.heading}>HOURS</h3>
      </div>

      <div className={classes.group}>
        <div className={classes.digitsGroup}>
          <Digit digit={countdownData.minutes.slice(0, 1)} />
          <Digit digit={countdownData.minutes.slice(1)} />
        </div>

        <h3 className={classes.heading}>MINUTES</h3>
      </div>

      <div className={classes.group}>
        <div className={classes.digitsGroup}>
          <Digit digit={countdownData.seconds.slice(0, 1)} />
          <Digit digit={countdownData.seconds.slice(1)} />
        </div>
        <h3 className={classes.heading}>SECONDS</h3>
      </div>
    </div>
  );
}

type DigitProps = {
  digit: string;
};

function Digit(props: DigitProps) {
  const { digit } = props;
  const [shouldAnimate, setShouldAnimate] = useState(false);
  const previous = usePrevious(digit);

  useEffect(() => {
    if (previous && digit !== previous) {
      setShouldAnimate(false);

      const timeoutId = setTimeout(() => {
        setShouldAnimate(true);
      }, 50);

      return () => {
        clearTimeout(timeoutId);
      };
    }
  }, [previous, digit]);

  return (
    <div className={`${classes.digit}`}>
      <span
        className={`${classes.text} ${classes.next} ${
          shouldAnimate ? classes.slideDown : ''
        }`}
      >
        {digit}
      </span>
      <span
        className={`${classes.text} ${
          shouldAnimate ? classes.slideDown : ''
        }`}
      >
        {previous ? previous : digit}
      </span>
    </div>
  );
}
