import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthLoginDto } from './dto';


@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) { 
  }

  @Post('login')
  login(@Body() body: AuthLoginDto) {
    return this.authService.login(body)
  }

  @Post('signup')
  signup() { 
    return this.authService.signup()
  }
}

