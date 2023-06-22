import React, { useEffect, useRef, useState } from 'react';
import { Gap, GapSize } from '../common/Gap/Gap';
import { wsDisconectFn, wsRun } from '../../common/webSocket';
import './webSocketConsole.css';

function WebSocketConsole() {
  const [logs, setLogs] = useState<string[]>([]);
  const consoleContentRef = useRef<HTMLDivElement>(null);

  const onMessage = (messages: string[]) => {
    setLogs((prevState) => [...prevState, ...messages]);
  };

  useEffect(() => {
    wsRun(onMessage);
    return wsDisconectFn;
  }, []);

  useEffect(() => {
    const consoleContentEl = consoleContentRef.current;
    consoleContentEl?.scroll(0, consoleContentEl.scrollHeight);
  }, [logs]);

  const content = logs.map((logLine, i) => (<p>{`${i + 1}: ${logLine}`}</p>));

  return (
    <div className="webSocketConsole">
      <Gap size={GapSize.Medium} />
      <h2>WebSocket example (console log)</h2>
      <div className="webSocketConsoleContent" ref={consoleContentRef}>{content}</div>
    </div>
  );
}

export { WebSocketConsole };
