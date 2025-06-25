import { ConflictException, Injectable, NotFoundException } from "@nestjs/common";
import { Appointment, AppointmentStatus } from "./appointment.entity";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm/repository/Repository";
import { BookAppointmentDto } from "./book-appointment.dto";

@Injectable()
export class AppointmentsService {
  constructor(
    @InjectRepository(Appointment)
    private repo: Repository<Appointment>,
  ) {}

  async book(dto: BookAppointmentDto) {
    // Validate overlapping appointments
   const overlap = await this.repo.findOne({
  where: {
    user: { id: dto.userId },
    scheduledAt: new Date(dto.scheduledAt),  
    status: AppointmentStatus.BOOKED,
  },
});

    if (overlap) throw new ConflictException('Slot already booked');

    const appointment = this.repo.create(dto);
    return this.repo.save(appointment);
  }

  findAll(page = 1, limit = 10) {
    return this.repo.find({
      skip: (page - 1) * limit,
      take: limit,
      relations: ['user', 'service'],
    });
  }

  async updateStatus(id: string, status: AppointmentStatus) {
    const app = await this.repo.findOneBy({ id });
    if (!app) throw new NotFoundException();
    app.status = status;
    return this.repo.save(app);
  }
}
