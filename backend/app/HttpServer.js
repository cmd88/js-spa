const http = require('http');

class HttpServer {
  constructor(app, config) {
    this.app = app;
    this.config = config;
  }

  createServer() {
    let server = http.createServer(this.app);

    server.listen(this.config.port, this.config.host, this.config.backlog, () => {
      console.log(`http-server created, host: ${this.config.host}, port: ${this.config.port}, backlog: ${this.config.backlog}`);
    });
  }

  clientRoutes() {
    this.app.use(function (req, res, next) {
      res.header('Access-Control-Allow-Origin', '*');
      res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
      next();
    });

    this.app.get('/get-item', (req, res) => {
      res.json({ item: 123 });
    });
  }
}

module.exports = HttpServer;