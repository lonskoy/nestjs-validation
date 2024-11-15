import { Body, Controller, Get, Post, UseFilters, UseInterceptors, UsePipes } from '@nestjs/common';
import { AppService } from './app.service';
import { registerDto } from './validators/registerValidator';
import { ValidationPipe } from './validators/validation.pipe';
import { HttpExceptionFilter } from './http.exception.filter';
import { logerInsterseptor } from './iterseptors/loggerInterseptor'



@UseFilters(HttpExceptionFilter)
@UseInterceptors(logerInsterseptor)
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @UsePipes(new ValidationPipe())
  @Post('/register')
  register(@Body() body: registerDto): registerDto {
   return body
  }
}
