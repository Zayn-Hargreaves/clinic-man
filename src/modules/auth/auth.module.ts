import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { RolesModule } from './roles/roles.module';
import { PermissionsModule } from './permissions/permissions.module';
import { RolePermissionModule } from './mappings/role-permission/role-permission.module';
import { UserRoleModule } from './mappings/user-role/user-role.module';

@Module({
  imports: [
    RolesModule,
    PermissionsModule,
    RolePermissionModule,
    UserRoleModule,
  ],
  controllers: [AuthController],
  providers: [AuthService],
})
export class AuthModule {}
