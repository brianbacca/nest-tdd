import { Currencies } from './currencies.entity';

export class CurrenciesRepository {
  async getCurrency(currency: string): Promise<any> {
    return new Currencies();
  }
  async createCurrency({ currency, value }): Promise<any> {
    return new Currencies();
  }
  async updateCurrency({ currency, value }): Promise<any> {
    return new Currencies();
  }
  async deleteCurrency(currency: string): Promise<any> {
    return new Currencies();
  }
}
