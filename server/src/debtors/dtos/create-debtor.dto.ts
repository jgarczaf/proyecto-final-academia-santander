import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsEmail, IsEnum, IsNotEmpty, IsNumber, IsOptional, IsString, Min } from 'class-validator';

export class CreateDebtorDto {
  @ApiProperty({ description: 'Nombre de la empresa deudora' })
  @IsString()
  @IsNotEmpty()
  companyName: string;

  @ApiProperty({ description: 'Identificación fiscal (NIF/CIF)' })
  @IsString()
  @IsNotEmpty()
  fiscalId: string;

  @ApiProperty({ description: 'País del deudor' })
  @IsString()
  @IsNotEmpty()
  country: string;

  @ApiProperty({ description: 'Límite de deuda' })
  @IsNumber({ maxDecimalPlaces: 2 })
  @Min(0)
  limit: number;

  @ApiPropertyOptional({ enum: ['ACTIVE', 'INACTIVE'] })
  @IsOptional()
  @IsEnum(['ACTIVE', 'INACTIVE'])
  status?: 'ACTIVE' | 'INACTIVE';

  @ApiProperty({ description: 'Nombre del contacto' })
  @IsString()
  @IsNotEmpty()
  contactName: string;

  @ApiProperty({ description: 'Email del contacto' })
  @IsEmail()
  contactEmail: string;
}
