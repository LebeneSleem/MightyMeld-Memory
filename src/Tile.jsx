export function Tile({ content: Content, flip, state }) {
  switch (state) {
    case "start":
      return (
        <Back
          className="inline-block h-20 w-820 bg-blue-300 rounded-2xl"
          flip={flip}
        />
      );
    case "flipped":
      return (
        <Front className="inline-block h-20 w-20 rounded-2xl flex items-center justify-center bg-blue-600">
          <Content
            style={{
              display: "inline-block",
              width: "80%",
              height: "80%",
              verticalAlign: "top",
              color: "#fcfcfc",
            }}
          />
        </Front>
      );
    case "matched":
      return (
        <Matched className="inline-block h-20 w-20 rounded-2xl flex items-center justify-center text-gray-500">
          <Content
            style={{
              display: "inline-block",
              width: "80%",
              height: "80%",
              verticalAlign: "top",
            }}
          />
        </Matched>
      );
    default:
      throw new Error("Invalid state " + state);
  }
}

function Back({ className, flip }) {
  return <div onClick={flip} className={className}></div>;
}

function Front({ className, children }) {
  return <div className={className}>{children}</div>;
}

function Matched({ className, children }) {
  return <div className={className}>{children}</div>;
}
