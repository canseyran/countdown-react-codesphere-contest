import { ReactNode } from 'react';

type ToolbarProps = {
  className?: string;
  children?: ReactNode;
};

export default function Toolbar(props: ToolbarProps) {
  return (
    <div className={`inline-block ${props.className}`}>
      <div className="flex bg-offBlack rounded p-2 ">{props.children}</div>
    </div>
  );
}
