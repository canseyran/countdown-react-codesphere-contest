import { useEffect, useRef, useState } from 'react';
import Countdown from 'src/components/countdown/countdown';
import Toolbar from 'src/components/toolbar/toolbar';
import ToolCountdownVariantPicker from 'src/components/toolbar/tools/countdown-variant-picker/countdown-variant-picker';
import ToolSizePicker from 'src/components/toolbar/tools/size-picker/size-picker';
import useClickedOutside from 'src/hooks/useClickedOutside';
import useCountdown from 'src/hooks/useCountdown';
import useCountdownParams from 'src/hooks/useCountdownParams';
import { CountdownVariants } from 'src/types/countdown-variants.enum';

type CountdownWithToolbarProps = {
  className?: string;
};

export default function CountdownWithToolbar(
  props: CountdownWithToolbarProps,
) {
  const {
    targetDate,
    setTargetDate,
    countdownSize,
    setCountdownSize,
    variant,
    setVariant,
  } = useCountdownParams();
  const countdownData = useCountdown(targetDate);
  const [isOpen, setIsOpen] = useState(false);
  const countdownRef = useRef<HTMLDivElement>(null);
  const { clickedOutside } = useClickedOutside(countdownRef);

  function handleChangeSize(size: number) {
    setCountdownSize(size);
  }

  useEffect(() => {
    setIsOpen(false);
  }, [clickedOutside]);

  return (
    <div className={props.className} ref={countdownRef}>
      <div
        className={`relative border-2 rounded-xl w-[90vw] max-w-[60rem] py-5 grid place-items-center ${
          isOpen ? ' border-orange-400' : 'border-transparent'
        }`}
      >
        {isOpen && (
          <>
            <div className="absolute top-0 left-[50%] bg-orange-400 rounded-xl px-4 text-white font-bold -translate-y-[50%] -translate-x-[50%]">
              COUNTDOWN
            </div>
            <div className="absolute bottom-0 left-[50%] translate-y-[110%] -translate-x-[50%] w-[90vw] z-50">
              <Toolbar>
                <span className="text-white pl-1 -mr-1">Size:</span>
                <ToolSizePicker
                  value={countdownSize}
                  minValue={32}
                  maxValue={176}
                  steps={8}
                  onChange={handleChangeSize}
                />
                <span className="text-white pl-1 -mr-1">Style:</span>
                <ToolCountdownVariantPicker
                  value={variant}
                  onChange={setVariant}
                />
              </Toolbar>
            </div>
          </>
        )}
        <Countdown
          variant={CountdownVariants.SIMPLE_ANIMATED}
          countdownData={countdownData}
          size={countdownSize}
          onClick={() => setIsOpen(true)}
        />
      </div>
    </div>
  );
}