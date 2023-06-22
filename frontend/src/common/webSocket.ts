import { io } from 'socket.io-client';
import { host } from './urls';

const ws = io(host, {
  autoConnect: false,
});

function wsRun(onMessage: (messages: string[]) => void) {
  ws.on('connect', () => {
    ws.on('message', onMessage);
  });

  ws.connect();
}

function wsDisconectFn() {
  ws.disconnect();
}

export { wsRun, wsDisconectFn };
