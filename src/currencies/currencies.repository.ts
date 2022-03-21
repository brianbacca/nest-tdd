import { InternalServerErrorException } from '@nestjs/common';
import { EntityRepository, Repository } from 'typeorm';
import { Currencies } from './currencies.entity';
import { CurrencyInputType } from './types/currencies-input.type';

@EntityRepository()
export class CurrenciesRepository extends Repository<Currencies> {
  async getCurrency(currency: string): Promise<any> {
    const result = await this.findOne({ currency });

    if (!result) {
      throw new InternalServerErrorException();
    }
    return result;
  }
  async createCurrency({ currency, value }: CurrencyInputType): Promise<any> {
    return new Currencies();
  }
  async updateCurrency({ currency, value }: CurrencyInputType): Promise<any> {
    return new Currencies();
  }
  async deleteCurrency(currency: string): Promise<any> {
    return new Currencies();
  }
}
