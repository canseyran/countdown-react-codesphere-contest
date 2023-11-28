import { CountdownVariantProps } from '../countdown-variant-props.type';
import classes from './circle.module.css';

export default function CountdownCircle(
  props: CountdownVariantProps,
) {
  return (
    <>
      <div className="relative flex gap-[0.25em]">
        <div className={classes.circle}>
          <div
            className="text-white text-[0.65em] font-medium
            "
          >
            {props.countdownData.days}
          </div>
          <div className="text-[0.18em] text-white font-bold">
            DAYS
          </div>
        </div>

        <div className={classes.circle}>
          <div
            className="text-white text-[0.65em] font-medium
            "
          >
            {props.countdownData.hours}
          </div>
          <div className="text-[0.18em] text-white font-bold">
            HOURS
          </div>
        </div>

        <div className={classes.circle}>
          <div
            className="text-white text-[0.65em] font-medium
            "
          >
            {props.countdownData.minutes}
          </div>
          <div className="text-[0.18em] text-white font-bold">
            MINUTES
          </div>
        </div>

        <div className={classes.circle}>
          <div
            className="text-white text-[0.65em] font-medium
            "
          >
            {props.countdownData.seconds}
          </div>
          <div className="text-[0.18em] text-white font-bold">
            SECONDS
          </div>
        </div>
      </div>
    </>
  );
}
