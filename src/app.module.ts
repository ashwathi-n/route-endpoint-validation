import { Module } from '@nestjs/common';
import { EndpointValidationModule } from './modules/endpoint-validation/endpoint-validation.module';

@Module({
  imports: [EndpointValidationModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
