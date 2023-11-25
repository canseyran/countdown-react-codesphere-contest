import { ReactNode, useState } from 'react';
import CloseIcon from '../icons/close';

type ModalProps = {
  children?: ReactNode;
  close?: () => void;
};
export default function Modal(props: ModalProps) {
  return (
    <div
      className="fixed top-0 left-0 w-[100vw] h-[100vh] overflow-hidden grid place-items-center bg-black bg-opacity-60"
      onClick={props.close}
    >
      <button
        onClick={props.close}
        className="absolute top-0 right-0 translate-y-5 -translate-x-5"
      >
        <CloseIcon className="w-8 h-8" fill="white" />
      </button>
      <div onClick={e => e.stopPropagation()}>{props.children}</div>
    </div>
  );
}
