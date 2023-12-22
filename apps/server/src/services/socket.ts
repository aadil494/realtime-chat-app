import { Server } from "socket.io";

class SocketService {
  private _io: Server;
  constructor() {
    console.log("Creating Socket Server");
    this._io = new Server();
  }

  get io() {
    return this._io;
  }

  public initListeners() {
    console.log("Init Socket Listeners");
    const io = this._io;
    io.on("connect", (socket) => {
      console.log(`Socket connected: ${socket.id}`);

      socket.on("event:message", async ({ message }: { message: string }) => {
        console.log("New meaage: ", message);
      });
    });
  }
}

export default SocketService;
