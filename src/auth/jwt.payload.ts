export interface JWTPayload {
  userId: string;
}

import { ApiProperty } from '@nestjs/swagger';

export class LoginDTO {
  @ApiProperty()
  name: string;

  @ApiProperty()
  pass: string;
}
