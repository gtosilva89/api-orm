export class CreateTransactionDto {
  account_id: number;
  atm_id: number;
  type: 'C' | 'D';
  amount: number;
}
