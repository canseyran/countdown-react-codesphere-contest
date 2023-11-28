import classes from './rectangle.module.css';
import { CountdownVariantProps } from '../countdown-variant-props.type';

export default function CountdownRectangle(
  props: CountdownVariantProps,
) {
  return (
    <div>
      <div className="flex gap-[0.2em]">
        <div className={classes.rectangle}>
          <div className="py-3">
            <div className="text-center text-[0.25em] font-bold">
              DAYS
            </div>
            <div className="text-center font-bold text-[0.9em]">
              {props.countdownData.days}
            </div>
          </div>
        </div>

        <div className={classes.rectangle}>
          <div className="py-3">
            <div className="text-center text-[0.25em] font-bold">
              HOURS
            </div>
            <div className="text-center font-bold text-[0.9em]">
              {props.countdownData.hours}
            </div>
          </div>
        </div>

        <div className={classes.rectangle}>
          <div className="py-3">
            <div className="text-center text-[0.25em] font-bold">
              MINUTES
            </div>
            <div className="text-center font-bold text-[0.9em]">
              {props.countdownData.minutes}
            </div>
          </div>
        </div>

        <div className={classes.rectangle}>
          <div className="py-3">
            <div className="text-center text-[0.25em] font-bold">
              SECONDS
            </div>
            <div className="text-center font-bold text-[0.9em]">
              {props.countdownData.seconds}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
