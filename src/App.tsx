import HeadingWithToolbar from './features/heading-with-toolbar/heading-with-toolbar';

export default function App() {
  return (
    <div className="flex flex-col items-center p-5">
      <HeadingWithToolbar className="max-w-[80%] min-w-[60%]" />
    </div>
  );
}
