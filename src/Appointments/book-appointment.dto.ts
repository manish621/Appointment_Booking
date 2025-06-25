import { IsUUID, IsNotEmpty, IsDateString } from 'class-validator';

export class BookAppointmentDto {
  @IsUUID()
  @IsNotEmpty()
  userId: string;

  @IsUUID()
  @IsNotEmpty()
  serviceId: string;

  @IsDateString()
  @IsNotEmpty()
  scheduledAt: string;
}
