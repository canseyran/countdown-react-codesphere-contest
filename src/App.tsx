import DescriptionWithToolbar from './features/description-with-toolbar/description-with-toolbar';
import HeadingWithToolbar from './features/heading-with-toolbar/heading-with-toolbar';
import BackgroundWithToolbar from './features/background-with-toolbar/background-with-toolbar';
import CountdownWithToolbar from './features/countdown-with-toolbar/countdown-with-toolbar';
import useEditModeParams from './hooks/useEditModeParams';
import ShareButton from './features/share-button/share-button';

export default function App() {
  const { isEditMode } = useEditModeParams();
  return (
    <div className="flex flex-col items-center">
      <HeadingWithToolbar className="pt-7" isEditMode={isEditMode} />
      <CountdownWithToolbar isEditMode={isEditMode} />
      <DescriptionWithToolbar
        className="pt-7"
        isEditMode={isEditMode}
      />
      <BackgroundWithToolbar isEditMode={isEditMode} />
      {isEditMode ? <ShareButton className="mt-10" /> : ''}
    </div>
  );
}
