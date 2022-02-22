import { Module } from '@nestjs/common';
import { EndpointValidationController } from './endpoint-validation.controller';
import { EndpointValidationService } from './endpoint-validation.service';

@Module({
  imports: [],
  controllers: [EndpointValidationController],
  exports: [EndpointValidationService],
  providers: [EndpointValidationService],
})
export class EndpointValidationModule {}
