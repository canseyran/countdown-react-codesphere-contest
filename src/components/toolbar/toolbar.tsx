import { ReactNode } from 'react';

type ToolbarProps = {
  className?: string;
  children?: ReactNode;
};

export default function Toolbar(props: ToolbarProps) {
  return (
    <div
      className={`flex items-center justify-center ${props.className} w-full`}
    >
      <div className="flex items-center gap-4 bg-offBlack rounded p-2  flex-wrap">
        {props.children}
      </div>
    </div>
  );
}
