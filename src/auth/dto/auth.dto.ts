import { 
  IsEmail,
  IsNotEmpty
} from "class-validator"
export class AuthLoginDto { 
  @IsEmail()
  @IsNotEmpty()
  email: string

  @IsNotEmpty()
  password: string

  @IsNotEmpty()
  first_name: string
  last_name: string
}