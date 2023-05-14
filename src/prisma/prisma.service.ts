import { Injectable } from '@nestjs/common';
import { PrismaClient } from  '@prisma/client'

@Injectable()
export class PrismaSerive extends PrismaClient {
  constructor() {
    super({
      datasources: {
        db: {
          url: 'postgresql://postgres:1234@localhost:5434/nestjs-crud-api?schema=public',
        },
      },
    });
  }
}
