// @ts-nocheck
import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

@Injectable()
export class SeoMiddleware implements NestMiddleware {
    use(req: Request, res: Response, next: NextFunction) {
        // Inject SEO headers
        res.setHeader('X-Robots-Tag', 'index, follow');

        // Example: Inject dynamic meta tags if using a template engine
        // res.locals.meta = {
        //   title: 'Light Speed Logistics',
        //   description: 'Fast & Reliable Global Shipping',
        //   keywords: 'logistics, courier, freight'
        // };

        next();
    }
}

// Example usage in AppModule:
// export class AppModule implements NestModule {
//   configure(consumer: MiddlewareConsumer) {
//     consumer
//       .apply(SeoMiddleware)
//       .forRoutes('*');
//   }
// }
