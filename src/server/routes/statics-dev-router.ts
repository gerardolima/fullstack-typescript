import * as proxy from 'http-proxy-middleware';
import { Router } from 'express';

const DEV_PORT = process.env.DEV_PORT || '8080';

export function staticsDevRouter() {
  const router = Router();

// All the assets are hosted by Webpack on localhost:8080 (Webpack-dev-server)
  router.use('/public', proxy(
    {
      target: `http://localhost:${DEV_PORT}`
    }));

// Any route should render the web app html (hosted by by Webpack-dev-server)
  router.use('**', proxy(
    {
      target: `http://localhost:${DEV_PORT}`,
      pathRewrite: (path: string) => '/public/index.html',
    }));

  return router;
}
