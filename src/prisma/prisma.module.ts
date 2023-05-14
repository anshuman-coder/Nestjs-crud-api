import { Global, Module } from '@nestjs/common';
import { PrismaSerive } from './prisma.service';

@Global()
@Module({
  providers: [PrismaSerive],
  exports: [PrismaSerive]
})

export class PrismaModule { }