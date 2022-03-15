import { IsNotEmpty, IsNumberString, Length } from 'class-validator';

export class ExchangeTypeDto {
  @IsNotEmpty()
  @Length(3, 3)
  from: string;

  @IsNotEmpty()
  @Length(3, 3)
  to: string;

  @IsNotEmpty()
  @Length(3, 3)
  amount: number;
}
