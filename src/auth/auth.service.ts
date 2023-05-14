/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthService {
  login() { 
    return {
      message: 'I have logged in'
    }
  }

  signup() {
    return {
      message: 'I have signed up'
    }
  }
}
