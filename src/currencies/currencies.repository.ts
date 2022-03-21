import { InternalServerErrorException } from '@nestjs/common';
import { validateOrReject } from 'class-validator';
import { EntityRepository, Repository } from 'typeorm';
import { Currencies } from './currencies.entity';
import { CurrencyInputType } from './types/currencies-input.type';

@EntityRepository()
export class CurrenciesRepository extends Repository<Currencies> {
  async getCurrency(currency: string): Promise<Currencies> {
    const result = await this.findOne({ currency });

    if (!result) {
      throw new InternalServerErrorException();
    }
    return result;
  }
  async createCurrency(
    currenciesInputType: CurrencyInputType,
  ): Promise<Currencies> {
    const createCurrency = new Currencies();
    // createCurrency.currency = currenciesInputType.currency;
    // createCurrency.value = currenciesInputType.value;

    Object.assign(createCurrency, currenciesInputType);
    try {
      await validateOrReject(createCurrency);
      await this.save(createCurrency);
    } catch (error) {
      throw new InternalServerErrorException(error);
    }
    return createCurrency;
  }
  async updateCurrency({ currency, value }: CurrencyInputType): Promise<any> {
    return new Currencies();
  }
  async deleteCurrency(currency: string): Promise<any> {
    return new Currencies();
  }
}
