import cors from 'cors';
import express, { Router } from 'express';

import { projectConfig } from '../../medusa-config';

export default (rootDirectory, pluginOptions) => {

  const router = Router()

  const corsOptions = {
    origin: projectConfig.store_cors.split(","),
    credentials: true,
  }
  router.options("/home",  cors(corsOptions));

  router.get("/home", cors(corsOptions), express.json(), (req, res) => {
    res.json({
      message: "Welcome to My Store!",
    })
  })

  return router
}