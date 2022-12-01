import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type UserDocument = User & Document;

@Schema()
export class User {
  @Prop()
  userId: string;

  @Prop({ required: true })
  email: string;

  @Prop()
  age: number;

  @Prop([String])
  favoriteFood: string[];
}

export const UserSchema = SchemaFactory.createForClass(User);
