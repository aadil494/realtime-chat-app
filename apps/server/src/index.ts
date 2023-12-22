import http from "http";

/**
 * initialize the server
 */
async function init() {
  const httpServer = http.createServer();
  const port = process.env.PORT || 8000;

  httpServer.listen(port, () => {
    console.log(`Http Server is listening on port ${port}`);
  });
}

init();
