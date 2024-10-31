import { useEffect, useState } from 'react';
import { CountdownData } from 'src/types/countdown-data.type';
import { TimeInfo } from 'src/types/responses/time-info.response';

// Use seconds since 1970
export default function useCountdown(targetTime: number) {
  const [countdown, setCountdown] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    (async function fetchServerTime() {
      setIsLoading(true);
      let currentTime = 0;
      try {
        const res = await fetch(
          'https://worldtimeapi.org/api/timezone/Europe/Vienna',
        );
        if (!res) {
          throw new Error(
            'Response error from time api, fallback to local browser time',
          );
        }
        const data = (await res.json()) as TimeInfo;
        currentTime = data.unixtime * 1000;
      } catch (e) {
        currentTime = new Date().getTime();
      } finally {
        setCountdown(targetTime - currentTime);
      }
      setIsLoading(false);
    })().catch(e => console.error(e));
  }, [targetTime]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCountdown(c => c - 450);
    }, 450);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return {
    isLoading: isLoading,
    countdownData: transformCountdown(countdown),
  };
}

function transformCountdown(countdown: number): CountdownData {
  const days = Math.floor(countdown / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (countdown % (1000 * 24 * 60 * 60)) / (1000 * 60 * 60),
  );
  const minutes = Math.floor(
    (countdown % (1000 * 60 * 60)) / (1000 * 60),
  );
  const seconds = Math.floor((countdown % (1000 * 60)) / 1000);

  const isExpired = days + hours + minutes + seconds <= 0;

  const daysPadding = days >= 100 ? 0 : 2;

  const daysString = String(days).padStart(daysPadding, '0');
  const hoursString = String(hours).padStart(2, '0');
  const minutesString = String(minutes).padStart(2, '0');
  const secondsString = String(seconds).padStart(2, '0');

  return {
    isExpired,
    days: daysString,
    hours: hoursString,
    minutes: minutesString,
    seconds: secondsString,
  };
}
