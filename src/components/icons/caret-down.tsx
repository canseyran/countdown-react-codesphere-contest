import { IconProps } from './icon-props.type';

export default function CaretDownIcon(props: IconProps) {
  return (
    <svg
      className={props.className}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="Arrow / Caret_Down_SM">
        <path
          id="Vector"
          d="M15 11L12 14L9 11"
          stroke={props.fill}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
    </svg>
  );
}
