import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsEnum, IsNotEmpty, IsString, MinLength } from 'class-validator';

export class CreateUserDto {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty({ example: 'user@company.com' })
  @IsEmail()
  email: string;

  @ApiProperty({ minLength: 6 })
  @IsString()
  @MinLength(6)
  password: string;

  @ApiProperty({ enum: ['ADMIN', 'CLIENT'] })
  @IsEnum(['ADMIN', 'CLIENT'])
  role: 'ADMIN' | 'CLIENT';

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  companyName: string;
}
