import { MouseEventHandler } from 'react';

type BackgroundProps = {
  src: string;
  onClick?: MouseEventHandler<HTMLImageElement>;
};

export default function Background(props: BackgroundProps) {
  return (
    <img
      className="absolute w-full h-full -z-50 object-cover"
      onClick={props.onClick}
      src={props.src}
    ></img>
  );
}
