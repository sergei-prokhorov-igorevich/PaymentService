import { Server, Socket } from 'socket.io';
import { logVerbose } from './logger/loggerClient';
import { host } from '../config';
import { onMessageWorker, runWorker, terminateWorker } from './worker/workerManager';

function startWebSocket(app: any) {
  const ws = new Server(app, { cors: { origin: [host] } });

  ws.on('connection', async (socket) => {
    await logVerbose(`WebSocket(id:${socket.id}) connected`);

    socket.on('disconnecting', () => {
      terminateWorker();
      logVerbose(`WebSocket(id:${socket.id}) disconnected`);
    });

    terminateWorker();
    runWorker();

    const onMessage = (str: string) => socket.emit('message', str);
    onMessageWorker(onMessage);
  });
}

export { startWebSocket };
