export function ChatLayout({ controls, aside, main }) {
  return (
    <div className="flex h-full flex-col p-4">
      {controls}

      <div className="padding-4 mt-4 flex flex-grow gap-4 border-2 p-4">
        <div className="basis-80 border-2 p-4">{aside}</div>
        <div className="flex-grow border-2 p-4">{main}</div>
      </div>
    </div>
  );
}
