import http from "http";
import SocketService from "./services/socket";
/**
 * initialize the server
 */
async function init() {
  const socketService = new SocketService();

  const httpServer = http.createServer();
  const port = process.env.PORT || 8000;

  socketService.io.attach(httpServer);
  httpServer.listen(port, () => {
    console.log(`Http Server is listening on port ${port}`);
  });

  socketService.initListeners();
}

init();
