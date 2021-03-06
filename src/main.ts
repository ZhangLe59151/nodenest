import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { HttpExceptionFilter } from './filters/http-exception.filter';
import { TransformInterceptor } from './interceptor/transform.interceptor';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  app.useGlobalFilters(new HttpExceptionFilter()); // 全局注册错误的过滤器
  app.useGlobalInterceptors(new TransformInterceptor()); // 全局注册拦截器
  await app.listen(80); // 3000
}
bootstrap();
