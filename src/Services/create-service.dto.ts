import { IsNotEmpty, IsInt, Min } from 'class-validator';

export class CreateServiceDto {
  @IsNotEmpty()
  name: string;

  @IsInt()
  @Min(1)
  duration: number; // in minutes
}
