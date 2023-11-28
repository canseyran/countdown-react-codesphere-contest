import React, { useEffect, useState } from 'react';
import ShareIcon from 'src/components/icons/share';

type ShareButtonProps = {
  className?: string;
};

export default function ShareButton(props: ShareButtonProps) {
  const [copied, setCopied] = useState(false);

  function copy() {
    const currentURL = new URL(window.location.href);
    currentURL.searchParams.set('edit', 'false');

    const el = document.createElement('input');
    el.value = currentURL.href;
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);

    setCopied(true);
  }

  useEffect(() => {
    if (copied) {
      setTimeout(() => {
        setCopied(false);
      }, 1500);
    }
  }, [copied]);

  return (
    <button
      onClick={copy}
      className={`bg-slate-900 hover:bg-slate-800 transition-all flex gap-2 items-center justify-center  px-6 py-2 rounded border border-slate-600 ${props.className}`}
    >
      <ShareIcon fill="white" className="h-4 w-4 " />
      <span className="text-md text-white">
        {!copied
          ? 'Share your countdown!'
          : 'Link copied to clipboard!'}
      </span>
    </button>
  );
}
