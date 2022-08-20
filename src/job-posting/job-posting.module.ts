import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CompanyEntity } from 'src/company/company.entity';
import { CompanyModule } from 'src/company/company.module';
import { JobPostingController } from './job-posting.controller';
import { JobPostingEntity } from './job-posting.entity';
import { JobPostingService } from './job-posting.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([JobPostingEntity, CompanyEntity]),
    CompanyModule,
  ],
  controllers: [JobPostingController],
  providers: [JobPostingService],
  exports: [JobPostingService]
})
export class JobPostingModule {}
