import { ApiProperty } from '@nestjs/swagger';
import {
  IsDateString,
  IsEnum,
  IsNotEmpty,
  IsNumber,
  IsPositive,
  IsString,
  Min,
} from 'class-validator';
import { BillStatus } from '../entities/bills.entity';

export class CreateBillDto {
  @ApiProperty({ description: 'ID del deudor asociado' })
  @IsNumber()
  @IsPositive()
  debtorId: number;

  @ApiProperty({ description: 'Número de factura' })
  @IsString()
  @IsNotEmpty()
  invoiceNumber: string;

  @ApiProperty({ description: 'Importe de la factura' })
  @IsNumber({ maxDecimalPlaces: 2 })
  @Min(0)
  amount: number;

  @ApiProperty({ description: 'Fecha de emisión (YYYY-MM-DD)' })
  @IsDateString()
  issueDate: string;

  @ApiProperty({ description: 'Fecha de vencimiento (YYYY-MM-DD)' })
  @IsDateString()
  dueDate: string;

  // Opcional: normalmente lo fija el servicio en PENDING
  @ApiProperty({ enum: BillStatus, required: false })
  @IsEnum(BillStatus)
  status?: BillStatus;
}
