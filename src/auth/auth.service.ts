import { Injectable } from '@nestjs/common';
import { PrismaSerive } from 'src/prisma/prisma.service';
import { AuthLoginDto } from './dto';
import crypto from "crypto"

@Injectable()
export class AuthService {
  constructor(private prisma: PrismaSerive) { }

  async login(body: AuthLoginDto) { 
    //create the password hash
    const hash = crypto.createHash("md5").update(body.password).digest('hex');

    //create the new user using the prisma
    

    //return the new user which has been created
    return body
  }

  signup() {
    return {
      message: 'I have signed up'
    }
  }
}
