import { ApiPropertyOptional } from '@nestjs/swagger';

export class RejectRequestDto {
  @ApiPropertyOptional({ description: 'Motivo de rechazo' })
  reason?: string;
}
