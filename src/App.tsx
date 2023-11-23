import DescriptionWithToolbar from './features/description-with-toolbar/description-with-toolbar';
import HeadingWithToolbar from './features/heading-with-toolbar/heading-with-toolbar';

export default function App() {
  return (
    <div className="flex flex-col items-center p-5">
      <HeadingWithToolbar />
      <DescriptionWithToolbar />
    </div>
  );
}
