import { MouseEvent, useState } from 'react';
import Background from 'src/components/background/background';
import CloseIcon from 'src/components/icons/close';
import Toolbar from 'src/components/toolbar/toolbar';
import ToolImagePicker from 'src/components/toolbar/tools/image-picker/image-picker';
import useBackgroundParams from 'src/hooks/useBackgroundParams';
import { BackgroundImages } from 'src/types/background-images';

type BackgroundWithToolbarProps = {
  isEditMode: boolean;
};

export default function BackgroundWithToolbar(
  props: BackgroundWithToolbarProps,
) {
  const { setBackgroundImage, backgroundImage } =
    useBackgroundParams();
  const [isOpen, setIsOpen] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  function handleOnClick(event: MouseEvent) {
    event.preventDefault();
    const { clientX, clientY } = event;
    setPosition({ x: clientX - 50, y: clientY - 50 });
    setIsOpen(o => !o);
  }

  return (
    <>
      {isOpen && props.isEditMode ? (
        <div
          style={{
            position: 'absolute',
            top: position.y,
            left: position.x,
          }}
        >
          <Toolbar>
            <ToolImagePicker
              images={BackgroundImages}
              onChange={setBackgroundImage}
            />
            <div
              className="bg-slate-900 border border-slate-600 rounded w-8 h-8 grid place-items-center cursor-pointer hover:bg-slate-800"
              onClick={() => setIsOpen(false)}
            >
              <CloseIcon className="w-6 h-6" fill="white" />
            </div>
          </Toolbar>
        </div>
      ) : (
        ''
      )}
      <Background
        src={backgroundImage.path}
        onClick={handleOnClick}
      />
    </>
  );
}
