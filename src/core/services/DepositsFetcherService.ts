import { IDepositsRepository } from 'core/types.repositories';
import { Deposit } from 'core/domain/deposit';
import { GetDepositsProps } from 'core/types.services';

export class DepositsFetcherService {
  private depositsRepository: IDepositsRepository;

  constructor(options: { depositsRepository: IDepositsRepository }) {
    this.depositsRepository = options.depositsRepository;
  }

  public async getDeposits(props: GetDepositsProps): Promise<Deposit[]> {
    return this.depositsRepository.getDeposits(props);
  }
}
