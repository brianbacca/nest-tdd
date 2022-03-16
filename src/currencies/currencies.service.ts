import {
  BadRequestException,
  Injectable,
  InternalServerErrorException,
} from '@nestjs/common';
export class Currencies {
  currency: string;
}
export class CurrenciesRepository {
  async getCurrency(currency: string): Promise<any> {
    return new Currencies();
  }
  async createCurrency({ currency, value }): Promise<any> {
    return new Currencies();
  }
}

@Injectable()
export class CurrenciesService {
  constructor(private currenciesRepository: CurrenciesRepository) {}
  async getCurrency(currency: string): Promise<any> {
    return await this.currenciesRepository.getCurrency(currency);
  }

  async createCurrency({ currency, value }): Promise<any> {
    if (value <= 0) {
      throw new BadRequestException('The value must be greater zero.');
    }
    return await this.currenciesRepository.createCurrency({ currency, value });
  }
}
