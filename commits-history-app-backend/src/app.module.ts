import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { CommitsModule } from './commits/commits.module';

@Module({
  imports: [UserModule, CommitsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
