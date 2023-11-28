type CountdownExpiredProps = {
  onClick: () => void;
};

export default function CountdownExpired(
  props: CountdownExpiredProps,
) {
  return (
    <div
      className="bg-slate-800 rounded-xl p-5"
      onClick={props.onClick}
    >
      <h1 className="text-8xl font-extrabold text-white">EXPIRED!</h1>
    </div>
  );
}
