import { useState } from 'react';
import Modal from 'src/components/modal/modal';
import { BackgroundImage } from 'src/types/background-images';

type ToolImagePickerProps = {
  images: BackgroundImage[];
  onChange?: (img: BackgroundImage) => void;
};

export default function ToolImagePicker(props: ToolImagePickerProps) {
  const [isOpen, setIsOpen] = useState(false);

  function handleChangeImage(img: BackgroundImage) {
    setIsOpen(false);
    props.onChange?.(img);
  }

  function handleOpenModal() {
    setIsOpen(true);
  }

  return (
    <>
      <div
        className="relative flex justify-between items-center bg-slate-900 border border-slate-600 rounded h-8 px-2 hover:bg-slate-800 cursor-pointer"
        onClick={handleOpenModal}
      >
        <span className="text-white">Change Background</span>
      </div>
      {isOpen ? (
        <Modal close={() => setIsOpen(false)}>
          <div className="bg-slate-900 p-4 max-h-[80vh] max-w-[90vw] overflow-y-scroll rounded-xl">
            <h2 className="text-2xl text-white pb-3">
              Select a background image
            </h2>
            <hr className="border-slate-700 py-2" />
            <div className="grid grid-cols-3 gap-2">
              {props.images.map(img => (
                <div
                  className="h-48 w-48 rounded-md cursor-pointer"
                  key={img.name}
                  onClick={() => handleChangeImage(img)}
                  style={{
                    backgroundImage: `url(${img.path})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                  }}
                ></div>
              ))}
            </div>
          </div>
        </Modal>
      ) : (
        ''
      )}
    </>
  );
}
