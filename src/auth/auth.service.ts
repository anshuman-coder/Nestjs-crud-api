import { Injectable } from '@nestjs/common';
import { PrismaSerive } from 'src/prisma/prisma.service';
import { AuthLoginDto } from './dto';

@Injectable()
export class AuthService {
  constructor(private prisma: PrismaSerive) { 

  }
  login(body: AuthLoginDto) { 
    return body
  }

  signup() {
    return {
      message: 'I have signed up'
    }
  }
}
