import { IconProps } from './icon-props.type';

export default function CaretDownIcon(props: IconProps) {
  return (
    <svg
      fill={props.fill}
      className={props.className}
      viewBox="0 0 256 256"
      id="Flat"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M128,188a11.96187,11.96187,0,0,1-8.48235-3.51465l-80-80a12.0001,12.0001,0,0,1,16.9707-16.9707L128,159.0293l71.51465-71.51465a12.0001,12.0001,0,0,1,16.9707,16.9707l-80,80A11.96187,11.96187,0,0,1,128,188Z" />
    </svg>
    // <svg
    //   className={props.className}
    //   viewBox="0 0 24 24"
    //   fill="none"
    //   xmlns="http://www.w3.org/2000/svg"
    // >
    //   <g id="Arrow / Caret_Down_SM">
    //     <path
    //       id="Vector"
    //       d="M15 11L12 14L9 11"
    //       stroke={props.fill}
    //       strokeWidth="2"
    //       strokeLinecap="round"
    //       strokeLinejoin="round"
    //     />
    //   </g>
    // </svg>
  );
}
