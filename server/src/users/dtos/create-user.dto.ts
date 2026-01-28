import { IsEmail, IsEnum, IsNotEmpty, IsOptional, MinLength } from 'class-validator';

export class CreateUserDto {
  @IsNotEmpty()
  @MinLength(2)
  name: string;

  @IsEmail()
  email: string;

  @IsNotEmpty()
  @MinLength(6)
  password: string;

  @IsEnum(['ADMIN', 'CLIENT'] as any)
  role: 'ADMIN' | 'CLIENT';

  @MinLength(2)
  companyName?: string;

  @MinLength(9)
  fiscalId?: string;
}
