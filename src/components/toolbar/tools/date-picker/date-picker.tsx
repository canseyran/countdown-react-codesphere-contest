import { ChangeEvent, useEffect, useState } from 'react';
import classes from './date-picker.module.css';

type ToolDatePickerProps = {
  dateTime: number;
  onDateTimeChange: (dateTime: number) => void;
};

export default function ToolDatePicker(props: ToolDatePickerProps) {
  const [formattedDate, setFormattedDate] = useState('');
  const [formattedTime, setFormattedTime] = useState('');

  const handleDateChanged = (e: ChangeEvent<HTMLInputElement>) => {
    const newDate = e.target.value;
    if (newDate.length !== 10) {
      return;
    }
    const dateTime = new Date(
      `${newDate}T${formattedTime}`,
    ).getTime();
    props.onDateTimeChange(dateTime);
  };

  const handleTimeChanged = (e: ChangeEvent<HTMLInputElement>) => {
    const newTime = e.target.value;
    if (newTime.length !== 5) {
      return;
    }
    const dateTime = new Date(
      `${formattedDate}T${newTime}`,
    ).getTime();
    props.onDateTimeChange(dateTime);
  };

  useEffect(() => {
    const date = new Date(props.dateTime);
    setFormattedDate(() => date.toISOString().split('T')[0]);
    setFormattedTime(
      () =>
        String(date.getHours()).padStart(2, '0') +
        ':' +
        String(date.getMinutes()).padStart(2, '0'),
    );
  }, [props.dateTime, setFormattedDate, setFormattedTime]);

  return (
    <div className="relative flex justify-center items-center rounded gap-2">
      <div className="flex gap-2 items-center ">
        <span className="text-white px-2">Date:</span>
        <input
          type="date"
          value={formattedDate}
          onChange={handleDateChanged}
          className={`${classes.date} h-8`}
        />
        <input
          type="time"
          value={formattedTime}
          onChange={handleTimeChanged}
          className={`${classes.time} h-8`}
        />
      </div>
    </div>
  );
}
