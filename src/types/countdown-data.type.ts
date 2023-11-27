export type CountdownData = {
  isExpired: boolean;
  days: CountdownAttribute;
  hours: CountdownAttribute;
  minutes: CountdownAttribute;
  seconds: CountdownAttribute;
};

type CountdownAttribute = {
  current: string;
  next: string;
};
