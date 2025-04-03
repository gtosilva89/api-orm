import { Module } from '@nestjs/common';
import { AtmsService } from './atms.service';
import { AtmsController } from './atms.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Atm } from './entities/atm.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Atm])],
  controllers: [AtmsController],
  providers: [AtmsService],
})
export class AtmsModule {}
