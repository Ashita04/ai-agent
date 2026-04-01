import { useEffect, useRef } from "react";

export default function ConsoleLog({ logs }) {
  const ref = useRef();

  useEffect(() => {
    ref.current.scrollTop = ref.current.scrollHeight;
  }, [logs]);

  return (
    <div className="console" ref={ref}>
      {logs.map((log, i) => (
        <div key={i} className="log">
          {log}
        </div>
      ))}
    </div>
  );
}