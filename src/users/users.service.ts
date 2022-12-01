import { UserRepository } from './users.repository';
import { Injectable } from '@nestjs/common';
import { User } from './schemas/user.schema';
import { generateID } from 'src/utils';
import { UpdateUserDto } from './dto';

@Injectable()
export class UserService {
  constructor(private readonly usersRepository: UserRepository) {}
  async getUserById(userId: string): Promise<User> {
    return this.usersRepository.getSingleUser({ userId });
  }

  async getUsers(): Promise<User[]> {
    return this.usersRepository.findMultiple({});
  }

  async createUser(email: string, age: number): Promise<User> {
    return this.usersRepository.createUser({
      userId: generateID(8),
      email,
      age,
      favoriteFood: [],
    });
  }

  async updateUser(userId: string, userUpdates: UpdateUserDto): Promise<User> {
    return this.usersRepository.updateUser({ userId }, userUpdates);
  }
}
