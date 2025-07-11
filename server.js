// server.js
const { createServer } = require('http');
const { parse } = require('url');
const next = require('next');

const dev = false;
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  createServer((req, res) => {
    const parsed = parse(req.url, true);
    handle(req, res, parsed);
  }).listen(process.env.PORT || 3000, () => {
    console.log('🎉 Next.js server started');
  });
});
