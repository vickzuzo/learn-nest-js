import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty()
  email: string;
  @ApiProperty()
  age: number;
}

export class UpdateUserDto {
  @ApiPropertyOptional()
  favoriteFoods: string[];
  @ApiProperty()
  age: number;
}
