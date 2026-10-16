
import { Injectable, Logger, NestMiddleware } from '@nestjs/common';
import { NextFunction, Request, Response } from 'express';

@Injectable()
export class LogMiddlewareMiddleware implements NestMiddleware {
  private readonly logger = new Logger('HTTP');

  use(req: Request, res: Response, next: NextFunction) {
    const { method, originalUrl, ip } = req;
    const userAgent = req.get('user-agent') || 'tidak diketahui';
    const startTime = Date.now();

    // Jika request sudah selesai
    res.on('finish', () => {
      // Status code
      const { statusCode } = res;

      // Durasi request
      const duration = Date.now() - startTime;

      // Tentukan pesan log
      const logMessage = `
[
  ${method}
  ${originalUrl}
  --
  status : ${statusCode}
  --
  durasi : ${duration}ms
  --
  IP Address : ${ip}
  --
  Agent : ${userAgent}
]`;

      if (statusCode >= 500) {
        this.logger.error(logMessage);
      } else if (statusCode >= 400) {
        this.logger.warn(logMessage);
      } else {
        this.logger.log(logMessage);
      }
    });

    next();
  }
}
