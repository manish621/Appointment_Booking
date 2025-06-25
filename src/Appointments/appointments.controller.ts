import { Body, Controller, Get, Param, Post, Put, Query } from "@nestjs/common/decorators";
import { AppointmentsService } from "./appointments.service";
import { AppointmentStatus } from "./appointment.entity";
import { BookAppointmentDto } from "./book-appointment.dto";

@Controller('appointments')
export class AppointmentsController {
  constructor(private service: AppointmentsService) {}

  @Post()
  book(@Body() dto: BookAppointmentDto) {
    return this.service.book(dto);
  }

  @Get()
  list(@Query('page') page: number, @Query('limit') limit: number) {
    return this.service.findAll(page, limit);
  }

  @Put(':id/cancel')
  cancel(@Param('id') id: string) {
    return this.service.updateStatus(id, AppointmentStatus.CANCELLED);
  }

  @Put(':id/complete')
  complete(@Param('id') id: string) {
    return this.service.updateStatus(id, AppointmentStatus.COMPLETED);
  }
}
