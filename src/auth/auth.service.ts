import { ForbiddenException, Injectable } from '@nestjs/common';
import { PrismaSerive } from 'src/prisma/prisma.service';
import { AuthLoginDto } from './dto';
import * as crypto from "crypto"
import { PrismaClientKnownRequestError } from '@prisma/client/runtime';

@Injectable()
export class AuthService {
  constructor(private prisma: PrismaSerive) {}

  async signup(body: AuthLoginDto) {
    const { email, password, first_name, last_name } = body
    //create the password hash
    const hash = crypto.createHash('md5').update(password).digest('hex');

    //create the new user using the prisma
    try {
      const user = await this.prisma.user.create({
        data: {
          email: email,
          first_name,
          last_name: last_name ? last_name : null,
          password: hash,
        },
      });

      delete user.password

      return user;
    } catch (error) {
      if (error instanceof PrismaClientKnownRequestError) { 
        if (error.code == 'P2002') { 
          throw new ForbiddenException({
            message: 'Already a User!',
          });
        }
      }

      throw error
    }   
  }

  login() {
    return {
      message: 'I have logged in',
    };
  }
}
