import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response } from 'express';

@Injectable()
export class CorsMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: Function) {
    res.header('Access-Control-Allow-Origin', 'https://main--tubular-dragon-cecba9.netlify.app'); // Update with your desired origin URL
    res.header('Access-Control-Allow-Methods', '*');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');

    // Handle CORS preflight requests
    if (req.method === 'OPTIONS') {
      res.header('Access-Control-Max-Age', '86400');
      res.status(200).send();
      return;
    }

    next();
  }
}
