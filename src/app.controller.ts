import { Controller, Get, Header } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  // @Header('Content-type', 'Application/json')
  getHello(): string {
    return this.appService.getHello();
  }
}
