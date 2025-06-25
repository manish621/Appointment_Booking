 API Endpoints
Appointment Booking API

Features
- Register users, create services, book/cancel/complete appointments
- PostgreSQL with TypeORM
- NestJS + TypeScript
- Input validation + pagination

Setup

```bash
npm install
cp .env.example .env
# update DB URL
npm run start:dev

 Users
- `POST /users` - Create new user
- `GET /users` - List all users

 Services
- `POST /services` - Create a service
- `GET /services` - List all services

 Appointments
- `POST /appointments` - Book appointment
- `GET /appointments?page=1&limit=10` - List appointments (paginated)
- `PUT /appointments/:id/cancel` - Cancel appointment
- `PUT /appointments/:id/complete` - Complete appointment

 Database Migration

## Generate Migration
```bash
npx typeorm migration:generate -d ormconfig.ts src/migrations/InitSchema
