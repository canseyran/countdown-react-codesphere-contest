import { IconProps } from './icon-props.type';

export default function AlignCenterIcon(props: IconProps) {
  return (
    <svg
      width="800px"
      height="800px"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={props.className}
      onClick={props.onClick}
    >
      <path
        d="M3 6H21M3 14H21M17 10H7M17 18H7"
        stroke={props.fill}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
