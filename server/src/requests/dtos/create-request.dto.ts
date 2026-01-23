import { ApiProperty } from '@nestjs/swagger';
import { IsArray, ArrayNotEmpty, IsInt, Min } from 'class-validator';

export class CreateRequestDto {
  @ApiProperty({ type: [Number], description: 'IDs de facturas a incluir en la solicitud' })
  @IsArray()
  @ArrayNotEmpty()
  @IsInt({ each: true })
  @Min(1, { each: true })
  billIds: number[];
}
