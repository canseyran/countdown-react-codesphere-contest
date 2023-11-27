import DescriptionWithToolbar from './features/description-with-toolbar/description-with-toolbar';
import HeadingWithToolbar from './features/heading-with-toolbar/heading-with-toolbar';
import BackgroundWithToolbar from './features/background-with-toolbar/background-with-toolbar';
import CountdownWithToolbar from './features/countdown-with-toolbar/countdown-with-toolbar';

export default function App() {
  return (
    <div className="flex flex-col items-center">
      <HeadingWithToolbar className="pt-5" />
      <CountdownWithToolbar />
      <DescriptionWithToolbar className="pt-5" />
      <BackgroundWithToolbar />
    </div>
  );
}
